import {createStore, applyMiddleware} from 'redux'
import redux_thunk from 'redux-thunk'

import main_reducer from './reducers.js'
import {REQUEST_WEATHER, RECEIVE_WEATHER, RESET_WEATHER} from './actions.js'

import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
const engine = createEngine('__weather-app-redux-store')
const middleware = storage.createMiddleware(engine, [], [REQUEST_WEATHER, RECEIVE_WEATHER, RESET_WEATHER])

const store = createStore(main_reducer, applyMiddleware(redux_thunk, middleware))
const load = storage.createLoader(engine)
load(store)

export default {
    store,
    load: () => load(store)
}
