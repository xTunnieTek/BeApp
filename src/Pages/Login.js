// import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/Pages/Login.css";
import bgr from '../Assets/Images/Login.png'
import logo from '../Assets/Images/Logo.png'

const Login = () => { 
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/pre-profile'; 
    navigate(path);
  }
  return (
    <div className="login-div">
        <img className="bgr-1-icon" src={bgr} />
        <div className='lol'>
            <div>
                <img className="logo-icon" alt="" src={logo} />
            </div>
            <div>
                <b className="welcome-to-bedating">
                    <span className="welcome-to-bedating-container">
                    <p className="welcome-to-p">
                        <span>WELCOME TO</span>
                    </p>
                    <p className="bedating-p">
                        <span>BeDating</span>
                    </p>
                    </span>
                </b>
            </div>
            <div>
                <Button Style="height:80px; background-color: var(--red-e94057);border-radius:20px"
                    className="btnlogin-button" type="primary" onClick={routeChange} danger>
                    <b className="log-in-b">LOG IN</b>
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Login;
