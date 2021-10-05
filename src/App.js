import React from 'react';
import logo from './Assets/Images/App/app-logo.png'
import './Styles/App.css';

function App ()
   {
    return (
      <div className="App">
        <h1>Welcome to Arcade Game</h1>
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
    );
  }

export default App;
