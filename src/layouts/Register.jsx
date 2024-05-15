import React, { useState , useContext} from 'react';
import '../styles/register.css';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './component/FormInput.jsx';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { auth , provider } from '../../firebase';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword , signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../auth/AuthContext.jsx';

const Register = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    roleSelection: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'roleSelection',
      type: 'select',
      placeholder: 'Player or Coach',
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      pattern: inputValues.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

     // Check if any field is empty
     if (
      !inputValues.username ||
      !inputValues.email ||
      !inputValues.roleSelection ||
      !inputValues.password ||
      !inputValues.confirmPassword
    ) {
      window.alert('Please fill in all fields.');
      return;
    }

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValues.email)) {
      window.alert('Please enter a valid email address.');
      return;
    }

    // Check if password is at least 6 characters long
    if (inputValues.password.length < 6) {
      window.alert('Password should be at least 6 characters long.');
      return;
    }

    // Check if password and confirm password match
    if (inputValues.password !== inputValues.confirmPassword) {
      window.alert('Passwords do not match.');
      return;
    }
    
    try {
      // Create user account using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      );
      const user = userCredential.user;

      // Add user data to Firestore
      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        username: inputValues.username,
        email: inputValues.email,
        role: inputValues.roleSelection, 
      });

      console.log('Registration successful!');
      window.alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error.message);
      window.alert('Email Already Exists');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/PlayerDashboard');
    } catch (error) {
      console.error('Error:', error.message);
      window.alert('Failed to sign in with Google');
    }
  };

  const signInWithGoogle = () => {
    dispatch({ type: "LOGIN_START" });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  }; 

  return (
    <div className="register">
      <div className="ellipse" />
      <div className="logo" />
      <form>
        <h2>Sign Up</h2>
        {inputs.map((input) => (
          <div key={input.id} className="formInput">
          <FormInput 
            key={input.id} 
            {...input} 
            value={inputValues[input.name]}
            onChange={handleChange}
          />
          {input.name === 'password' || input.name === 'confirmPassword' ? (
            <div
              className="eyeIcon"
              onClick={
                input.name === 'password'
                  ? togglePasswordVisibility
                  : toggleConfirmPasswordVisibility
              }
            >
              {input.name === 'password' ? (
                passwordVisible ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )
              ) : confirmPasswordVisible ? (
                <Visibility />
              ) : (
                <VisibilityOff />
              )}
            </div>
          ) : null}
        </div>
        ))}
        <button type="submit" onClick={handleRegister}>
          Sign Up
        </button>
        <div className="rformLink">
          <span>Already have an account? </span>
          <Link to="/login" className="formSignup" style={{ textDecoration: 'none' }}>
            Sign In
          </Link>
        </div>
        <div className="rline"></div>
        <div className="rmedia-options"></div>
        <Link to="#" className="rgoogle" style={{ textDecoration: "none" }}>
          <div className="rgoogleImg" />
          <span>Sign In with Google</span>
        </Link>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
