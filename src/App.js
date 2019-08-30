import React from 'react';
import Clock from './Clock.js';

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

function App() {
  return (
    <div className="App">
        <Clock />
        <a href="#" onClick={handleClick}>
          Click me
        </a>
    </div>
  );
}

export default App;
