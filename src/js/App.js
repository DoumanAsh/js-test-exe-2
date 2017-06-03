import React from 'react';
import './../styles/App.css';

import Header from './components/Header.js';
import Weather from './components/Weather.js';

const app = () => (
    <div className="App">
        <Header title="Weather App"/>
        <Weather/>
    </div>
);

export default app;
