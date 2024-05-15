import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { auth, signInWithEmailAndPassword, signInWithPopup } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";
// import { ReactSession } from 'react-client-session';
// ReactSession.setStoreType("localStorage");

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState('password');
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggleEye(!toggleEye);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!inputs.email || !inputs.password) {
      window.alert('Please fill all the fields.');
      return;
    }
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      // localStorage.setItem('email', inputs.email);
      // localStorage.setItem('isLogged', 'true'); 
      // ReactSession.set("isLogged", true);
      // window.alert('Login Successful');
      // const user = userCredential.user;
      // setTimeout(() => {
      //   navigate("/PlayerDashboard");
      // }, 5000);
      navigate('/UserRole');
    window.alert('Login successful!');
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          window.alert('User not found.');
          break;
        case "auth/wrong-password":
          window.alert('Wrong password.');
          break;
        default:
          console.error('Error:', error.message);
          window.alert('An error occurred. Please try again later.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      if (user) {
        navigate('/UserRole');
      }
    } catch (error) {
      console.error('Error:', error.message);
      window.alert('Failed to sign in with Google');
    }
  };

  return (
    <div className="login">
      <div className="logo" />
      <form>
        <h2>Login</h2>
        {/* <div className="user-role">
          <select name="user-role" id="user-role">
            <option value="" disabled selected>User Role</option>
            <option value="player">Player</option>
            <option value="coach">Coach</option>
          </select>
        </div> */}
        <div className="formInput">
          <input
            type="email" 
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          {inputType === "password" ? (
            <VisibilityOff onClick={handleToggle} className="eyeIcon" />
          ) : (
            <Visibility onClick={handleToggle} className="eyeIcon" />
          )}
        </div>
        <div className="remember-me">
          <input type="checkbox" name="remember-me" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label> {}
        </div>
        <a href="#" className="forgot-password">Forgot Password</a>
        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>
        <div className="formLink">
          <span>Don't have an account? </span>
          <Link
            to="/register"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Sign Up
          </Link>
        </div>
        <div className="line"></div>
        <div className="media-options"></div>
        <div className="googleContainer">
          <Link to="#" className="google" style={{ textDecoration: "none" }}
            onClick={handleGoogleSignIn} 
          >
            <div className="googleImg" />
            <span>Sign In with Google</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;