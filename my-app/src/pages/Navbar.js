import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../pics/logo.png';

const Navbar = () => {
  return (
    <nav className="sideNav">
      <div className="up">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" className="body-nav-abt mx-4 my-0"> About Us </a>
        <h6 className="mx-4"> Other Features</h6>
        <a href="#" className="body-nav mx-5 my-0"> Generate Plan </a>
        <a href="#" className="body-nav mx-5 my-0"> Generate Qiz </a>
      </div>
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