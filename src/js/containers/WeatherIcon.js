import React from 'react'
import {connect} from 'react-redux'

const Icon = ({type}) => {
        return type !== null ? <img className="App-weather__icon" src={`https://www.metaweather.com/static/img/weather/${type}.svg`} alt="Weather icon"/> :
                               <div />
}

const state_to_props = ({weather}) => {
    return {
        type: weather.today !== null ? weather.today.weather_state_abbr : null
    }
}

const WeatherIcon = connect(state_to_props)(Icon)

export default WeatherIcon
