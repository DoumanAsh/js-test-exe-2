import React from 'react';

import date from '../utils/date.js';

const Title = ({city, time}) => (
    <header className="App-weather__title">
        <h2>{city}</h2>
        <h3>{date.formatter.format(time)}</h3>
    </header>
);

const Element = ({name, value}) => <div>{`${name}:`} <span>{value}</span> </div>;

const Icon = ({type}) => <img className="App-weather__icon" src={`https://www.metaweather.com/static/img/weather/${type}.svg`} alt="Weather icon"/>;

const weather = () => (
    <content className="App-weather">
        <Title city={"City name"} date={date.now()}/>
        <Icon type="c"/>
        <div className="App-weather__data">
            <Element name="Temperature" value="38.3"/>
            <Element name="Humidity" value="58%"/>
            <Element name="Air pressure" value="666mmm"/>
        </div>

    </content>
);
export default weather;
