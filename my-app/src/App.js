import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logo from './pics/logo.png';
import qiz from './pics/homeicon.png';
import bubble1 from './pics/bubbleOne.png';
import bubble2 from './pics/bubbleTwo.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="navBar">
        <div className="left">
          <img src={logo} className="App-logo" alt="logo" />

          <DropdownButton id="dropdown-basic-button" title="Our Features">
            <Dropdown.Item href="#/action-1">personalized quiz</Dropdown.Item>
            <Dropdown.Item href="#/action-2">personalized study plan</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">option3</Dropdown.Item> */}
          </DropdownButton>
        </div>
      

        <div className="right">
          <p> About Us </p>
          <button> Sign In </button>
        </div>
      </div>

      <div className="homePage">
        {/* image and floating stuffys*/}
          <img src={bubble2} className="bubble2" alt="bubble-1" />
          <img src={qiz} className="home-logo" alt="home-icon" />
          <img src={bubble1} className="bubble1" alt="bubble-2" />
        <div className="generate">
          <button> Generate Qiz </button>
        </div>
      </div>

      <div className="tagline">
        <p> "We make the <span> Qiz </span>, you <span> Ace </span> the test </p>
      </div>

      <div className="product">
        {/* product vid  */}
        <p> make my own ... </p>
        <div className="options">
            <p> study plan</p>
            <p> qiz </p>
        </div>
      </div>

      <div className="footer"> 
        <div class="credit">&copy; <span id="currentYear"></span> by <span> CSS Qiz</span> | All Rights Reserved</div>
      </div>
    </div>
  );
}

export default App;