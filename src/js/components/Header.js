import React from 'react';

const header = ({title}) => (
    <header className="App-header header">
        <span className="heading">{title}</span>
        <input placeholder="City..." type="text"/>
    </header>
);

export default header;
