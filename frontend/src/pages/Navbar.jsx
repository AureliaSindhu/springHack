import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../pics/logo.png';
import sideline from '../pics/side-line.png'
import horline from '../pics/hor-line.png'

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Qiz');  
  };

  const handleClick2 = () => {
    navigate('/StudyPlan');  
  };

  return (
    <nav className="sideNav">
      <div className="up">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" className="body-nav-abt mx-4 my-0"> About Us </a>
        <h6 className="mx-4"> Other Features</h6>
        <a href="#" className="body-nav mx-5 my-0" onClick={handleClick2}> Generate Plan </a>
        <a href="#" className="body-nav mx-5 my-0" onClick={handleClick}> Generate Qiz </a>
      </div>
      {/* <img src={horline} alt="line" className="hor-line"/> */}
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