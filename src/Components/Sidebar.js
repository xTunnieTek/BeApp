import "../Assets/CSS/MainLayout.css";
import { useState } from "react";
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import Logout from "../Assets/SVG/Logout.svg";
import Home from "../Assets/SVG/home.svg";
import Messages from "../Assets/SVG/messages.svg";
import Profile from "../Assets/SVG/profile.svg";
import Global from "../Assets/SVG/global.svg";
import Support from "../Assets/SVG/support.svg";
import Setting from "../Assets/SVG/settings.svg";

const Sidebar = () => {
    const [active,setActive] = useState('');
    // Set the active state to the clicked button and selected the active class
    const addActiveClass = (e) => {
        const clicked = e.target.id;
        if(active === clicked) {
            setActive(clicked);
        } 
        else {
            setActive(clicked);
            window.location.href = clicked || '404';
        }
    }

    return (
        <div class="Sidebar">
            <div class="profile">
                <a href="#"><img className="avatar" src={Avatar} /></a>
                <h3>Ánh Ngọc, 18</h3>
                <button><img className="iconLogout" src={Logout}/></button>
            </div>
            <div class="match">
                <div class="images">
                    <img src={Avatar} />
                </div>
            </div>
            <div class="menu">
                <button className={`${active === 'home' ? 'selected' : ''}`} id="home" onClick={addActiveClass}><img src={Home}/> <h3 className={`${active === 'home' ? 'selected' : ''}`} id="home" onClick={addActiveClass}>#Home</h3></button>
                <button className={`${active === 'messages' ? 'selected' : ''}`} id="messages" onClick={addActiveClass} ><img src={Messages}/> <h3>#Messages</h3></button>
                <button className={`${active === 'profile' ? 'selected' : ''}`} id="profile" onClick={addActiveClass}><img src={Profile}/> <h3>#Profile</h3></button>
                <button className={`${active === 'global' ? 'selected' : ''}`} id="global" onClick={addActiveClass}><img src={Global}/> <h3>#Global</h3></button>
                <button className={`${active === 'support' ? 'selected' : ''}`} id="support" onClick={addActiveClass}><img src={Support}/> <h3>#Support</h3></button>
                <button className={`${active === 'premium' ? 'selected' : ''}`} id="premium" onClick={addActiveClass}><img src={Setting}/> <h3>#Setting</h3></button>
            </div>
        </div>
     );
};

export default Sidebar;