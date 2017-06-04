import {combineReducers} from 'redux'
import * as storage from 'redux-storage'

import {REQUEST_WEATHER, RECEIVE_WEATHER, RESET_WEATHER, ENTER_CITY, UNKNOWN_CITY} from './actions.js'

function city(state='Use search box!', action) {
    switch (action.type) {
        case ENTER_CITY: return `Looking for ${action.name}...`
        case UNKNOWN_CITY: return `Couldn't find ${action.name}.`
        case RECEIVE_WEATHER: return action.data.city
        default: return state;
    }
}

function weather(state={city: null, time: null, today: null}, action) {
    switch (action.type) {
        case REQUEST_WEATHER: return state //todo: show status
        case RECEIVE_WEATHER: return action.data
        case RESET_WEATHER: return action.data
        default: return state
    }
}

export default storage.reducer(combineReducers({
    city,
    weather
}))
