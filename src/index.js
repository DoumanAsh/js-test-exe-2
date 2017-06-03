import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './styles/index.css'

import App from './js/App.js'
import registerServiceWorker from './registerServiceWorker'
import WeatherStore from './js/stores/weather'

ReactDOM.render(
    <Provider store={WeatherStore}>
        <App/>
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()
