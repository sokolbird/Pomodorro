import React, { Component } from 'react';
import Logo from './Logo.js'
import Main from './Main.js'
import PomodorosLeft from './PomodorosLeft.js'
import Thoughts from './Thoughts.js'

class App extends Component {
  render() {
    return (
      <div className='wrap'>
          <Logo/>
          <Main/>
          <PomodorosLeft/>
          <Thoughts/>
      </div>
    );
  }
}

export default App;
