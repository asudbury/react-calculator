import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel.js';

class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
