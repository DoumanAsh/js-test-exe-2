import React from 'react'

import Title from '../containers/CityWeatherTitle.js'
import Icon from '../containers/WeatherIcon.js'
import WeatherData from '../containers/WeatherContainer.js'

const Weather = () => (
    <content className="App-weather">
        <Title />
        <Icon/>
        <WeatherData/>
    </content>
)

export default Weather
