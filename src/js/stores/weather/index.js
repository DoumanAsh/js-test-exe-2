import {createStore, applyMiddleware} from 'redux'
import redux_thunk from 'redux-thunk'

import {weather_refresher, reset_search, fetch_weather} from './actions.js'
import main_reducer from './reducers.js'
import {RECEIVE_WEATHER} from './actions.js'

import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
import date from '../../utils/date.js'

const engine = createEngine('__weather-app-redux-store')
const middleware = storage.createMiddleware(engine, [], [RECEIVE_WEATHER])

const store = createStore(main_reducer, applyMiddleware(redux_thunk, middleware))
const load = storage.createLoader(engine)
load(store).then((state) => {
    if (state.weather !== undefined && state.weather.city_id !== null) {
        if (date.is_hour_passed(new Date(state.weather.time))) {
            store.dispatch(fetch_weather(state.weather.city_id))
        }
        else {
            weather_refresher.start(() => store.dispatch(fetch_weather(state.weather.city_id)))
        }
    }
    else {
        store.dispatch(reset_search())
    }
})

export default {
    store,
    load: () => load(store)
}
