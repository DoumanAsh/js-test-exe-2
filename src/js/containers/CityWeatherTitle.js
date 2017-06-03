import React from 'react'
import {connect} from 'react-redux'

import date from '../utils/date.js'

const Title = ({city, time}) => (
    <header className="App-weather__title">
        <h2>{city}</h2>
        {time !== null && <h3>{date.formatter.format(new Date(time))}</h3> }
    </header>
)

const state_to_props = ({city, weather}) => {
    return {
        city: city || '???',
        time: weather.time
    }
}

const CityTitle = connect(state_to_props)(Title)

export default CityTitle
