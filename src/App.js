import React, { Component } from 'react';
import './App.css';
import FlightBoard from './components/flights-board/flight-board.component';
import ModeSelector from './components/mode-selector/mode-selector.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModeSelector></ModeSelector>
        <FlightBoard></FlightBoard>
      </div>
    );
  }
}

export default App;
