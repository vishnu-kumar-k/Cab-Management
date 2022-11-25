import './resources/css/Login.css';
import React, { useState, useEffect } from 'react';
import fire from './fire';
import Home from './Home';

import LoginForm from './resources/components/LoginForm';


import {useNavigate,  Link} from 'react-router-dom';

function Login(props) {
  const [user, setUser] = useState('');
  const [flag,setFlag]=useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const clearInput = () => {
    
   
    setEmail('');
    setPassword('');
  };
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }



  const handleLogin = (event) => {
    event.preventDefault();
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
      
 

  };
  const handleSignup = (event ) => {
    event.preventDefault();
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
        }
      })
  };
  // const handleLogout = () => {
  //     setFlag('1');
      
  //   localStorage.setItem('auth',"");
  //   fire.auth().signOut();
  // };
  const authListener = () => {
    
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
             clearInput();
             
            // setFlag('');
            props.setUserStatus(user);
        setUser(user);
        
        
     
      }
      else {
        
        setUser("");
        props.setUserStatus('');
        
      }
    })
  };
  
  useEffect(() => {
    authListener();
  }, []);

  
  const navigate = useNavigate(); 
  return (
    
  <>
      {

        // <Home handleLogout={handleLogout} user={user}/> 
        // navigate('/home',{state:{id:1,logout:props.handleLogout}})
        // ()=>{navigate('/')
      
        user ? ( navigate('/')) :

          ((<LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}

          />) 
          )}
      </>
       

  );

}
export default Login;