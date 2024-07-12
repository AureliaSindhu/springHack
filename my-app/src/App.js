import React from 'react';
import Typewriter from "typewriter-effect";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logo from './pics/logo.png';
import qiz from './pics/homeicon.png';
import bubble1 from './pics/bubbleOne.png';
import bubble2 from './pics/bubbleTwo.png';
import Qiz from './qiz';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navBar">
          <div className="left">
            <img src={logo} className="App-logo" alt="logo" />

            <DropdownButton id="dropdown-basic-button" title="Our Features">
              <Dropdown.Item href="#">personalized quiz</Dropdown.Item>
              <Dropdown.Item href="#/action-2">personalized study plan</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-3">option3</Dropdown.Item> */}
            </DropdownButton>
          </div>


        <div className="right">
          <p> About Us </p>
          <button className="signIn"> Sign In</button>
\        </div>
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
        <p> "We make the <span className="qiz-text"> Qiz</span>, you
          <Typewriter 
            options={{
            strings: ['ACE'],
            pauseFor: 2000,
            autoStart: true,
            loop: true,
          }}/>the test!" </p>
      </div>
 
      <div className="product">
        {/* product vid  */}
        <div className="vid-frame">
         <h1>Our main product</h1>
        </div>
      </div>

      <div className="howto">
            <h1>make my own...</h1>
            <div className="cards">
              <div className="card">
                <div className="inner-border"><h1>study plan</h1></div>
                </div>
              <div className="card">
                <div className="inner-border"><h1>Qiz</h1></div>
                </div>
            </div>
      </div>

    </div>
  );
}

export default App;