import React from 'react'

import '../Assets/CSS/Pages/Login.css'
import Bgr from '../Assets/Images/BeApp.png'
import Icon from '../Assets/SVG/B.svg'



function Login() {
  return (
    <div className="login">
        {/* <img src={Bgr} alt="BeApp" /> */}
        <div className="loginContainer">
            <img src={Icon} alt = "BeApp" />
            <div className="loginText">
                <h1>WELCOME TO</h1>
                <h4>BeDating</h4>
            </div>
            <button className='btn-Login'><i class="fa-brands fa-google"></i> Sign in with Google</button>
        </div>
        <div className="Empty">
            {/* Empty */}
        </div>
    </div>
  )
}

export default Login