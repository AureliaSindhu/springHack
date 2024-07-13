import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sideNav">
      <div className="up">
        <a href="#"> About Us </a>
        <h2> Other Features</h2>
        <a href="#"> Generate Plan </a>
        <a href="#"> Generate Qiz </a>
      </div>
      <div className="down">
        <h2> Past Documents </h2>
        {/* function to call the past document */}
        <h2> Past Plans </h2>
        {/* plans  */}
      </div>
    </nav>
  );
}

export default Navbar;