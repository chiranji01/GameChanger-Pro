import React from 'react';
import '../../styles/navbar.css';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <nav id="home_nav">
      <div className="nav__logo"></div>
      <div className="nav__links">
      <ul className="nav__links">
        <li className="link"><a href="http://localhost:5173/">Home</a></li>
        {/* <li className="link"><a href="#">Matches</a></li>
        <li className="link"><a href="#">Contact</a></li> */}
        <li className="link"><a href="#">About Us</a></li>
      </ul>
      </div>
      <Link to="/register">
      <button className="r_btn">REGISTER</button></Link>
      <Link to="/login">
      <button className="l_btn">LOGIN</button></Link>
    </nav>
  );
}

export default HomeNavbar;
