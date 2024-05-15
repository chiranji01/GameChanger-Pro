import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="ellipse" />
      <div className="logo" />
      <form>
        <h2>Get Started!</h2>
            <Link to="/login">
              <button id="login-btn">Login</button>
            </Link>
            <Link to="/register">
              <button id="register-btn">Sign Up</button>
            </Link>
            <div className="wline"></div>
            <div className="wmedia-options"></div>
            <div className="wgoogleContainer">
            <Link to="#" className="wgoogle" style={{ textDecoration: "none" }}>
              <div className="wgoogleImg" />
              <span>Sign In with Google</span>
            </Link>
            </div>
       
      </form>
    </div>
  )
}

export default Welcome