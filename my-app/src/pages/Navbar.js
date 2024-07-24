import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../pics/logo.png';
import sideline from '../pics/side-line.png'
import horline from '../pics/hor-line.png'

{/* - remove the planColor, qizColor that's passed into Navbar if 
      further implementation causes problems
        => also remove the inline CSS styling in Generate Plan and Generate Qiz*/}
        
const Navbar = ({planColor, qizColor}) => {
  return (
    <nav className="sideNav">
      <div className="up">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" className="body-nav-abt mx-4 my-0"> About Us </a>
        <h6 className="mx-4"> Other Features</h6>
        <a href="#" className="body-nav mx-5 my-0" style={{color: planColor}}> Generate Plan </a>
        <a href="#" className="body-nav mx-5 my-0" style={{color: qizColor}}> Generate Qiz </a>
      </div>
      {/* <img src={horline} alt="line" className="hor-line"/> */}
      <div className="hor-line"></div>
      <div className="down">
        <h6 className="mx-4"> Past Documents </h6>
        {/* function to call the past document */}
        <h6 className="mx-4"> Past Plans </h6>
        {/* plans  */}
      </div>
    </nav>
  );
}

export default Navbar;