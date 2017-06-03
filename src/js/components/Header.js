import React from 'react'

import CityInput from '../containers/InputCity.js'

const Header = ({title}) => (
    <header className="App-header header">
        <span className="heading">{title}</span>
        <CityInput/>
    </header>
)

export default Header
