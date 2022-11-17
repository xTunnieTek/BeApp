import React from "react";
import axios from "axios";
import {authentication} from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "../Assets/CSS/Pages/Login.css";
import Icon from "../Assets/Images/icon.png";

function Login() {
  let navigate = useNavigate();

  const signInWithGoogle = async () => {
    try{
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authentication, provider)
        const auth = getAuth();
        const user = auth.currentUser;
        const name = user.displayName;
        const email = user.email;
        console.log(name,email);
        // checking if user with email is existed in database
        const response = await axios.post(`http://localhost:8000/users/login`,{email,name});
        console.log(response);
        localStorage.setItem("AuthToken",response.data.token);
        localStorage.setItem("UserId",response.data.user._id);
        // if not redirect to profile page
        if(response.status === 201) {
            navigate('/profile');
        }
        // if yes redirect to dashboard page
        if(response.status === 200) {
            navigate('/home');
        }
    }catch(err) {
        console.log(err);
    }
}

  return (
    <div className="login">
      {/* <img src={Bgr} alt="BeApp" /> */}
      <div className="loginContainer">
        <img src={Icon} alt="BeApp" />
        <div className="loginText">
          <h1>WELCOME TO</h1>
          <h4>BeDating</h4>
        </div>
        <button className="btn-Login" onClick={signInWithGoogle}>
          <i className="fa-brands fa-google"></i> Sign in with Google
        </button>
      </div>
      <div className="Empty">{/* Empty */}</div>
    </div>
  );
}

export default Login;
