import React from 'react'
import {connect} from 'react-redux'

import WeatherData from './WeatherData.js'

const types = {
    Weather: 1,
    Looking: 2
}

const WeatherDataContainer = ({display_type}) => {
    switch(display_type) {
        case types.Weather: return <WeatherData/>
        case types.Looking: return <div/>
        default: throw new Error("Unknown display_type in WeatherDataContainer")
    }
}

const state_to_props = ({weather}) => {
    return {
        display_type: weather.today === null ? types.Looking : types.Weather
    }
}

export default connect(state_to_props)(WeatherDataContainer)
