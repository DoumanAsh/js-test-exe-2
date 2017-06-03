import React from 'react'
import {connect} from 'react-redux'

const Element = ({name, value}) => <div>{`${name}:`} <span>{value}</span> </div>

const Weather = ({temp, humidity, air_pressure}) => (
    <div className="App-weather__data">
        <Element name="Temperature" value={`${Math.round(temp)} °C`}/>
        <Element name="Humidity" value={`${humidity}%`}/>
        <Element name="Air pressure" value={`${Math.round(air_pressure)}mbar`}/>
    </div>
)

const state_to_props = ({weather}) => {
    if (weather.today !== null) {
        return {
            temp: weather.today.the_temp,
            humidity: weather.today.humidity,
            air_pressure: weather.today.air_pressure
        }
    }
    else {
        return {
            temp: null,
            humidity: null,
            air_pressure: null
        }
    }
}

const WeatherData = connect(state_to_props)(Weather)

export default WeatherData
