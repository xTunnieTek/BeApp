import '../Assets/CSS/MainLayout.css';
import { useState } from "react";

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
                <a href="#"><img className="avatar" src="/Assets/Images/Avatar/avatar.jpg" /></a>
                <h3>Ánh Ngọc, 18</h3>
                <button><img className="iconLogout" src="/Assets/SVG/Logout.svg"/></button>
            </div>
            <div class="match">
                <div class="images">
                    <img src="/Assets/Images/Avatar/avatar.jpg" />
                </div>
            </div>
            <div class="menu">
                <button className={`${active === 'home' ? 'selected' : ''}`} id="home" onClick={addActiveClass}><img src="/Assets/SVG/home.svg"/> <h3 className={`${active === 'home' ? 'selected' : ''}`} id="home" onClick={addActiveClass}>#Home</h3></button>
                <button className={`${active === 'messages' ? 'selected' : ''}`} id="messages" onClick={addActiveClass} ><img src="/Assets/SVG/messages.svg"/> <h3>#Messages</h3></button>
                <button className={`${active === 'profile' ? 'selected' : ''}`} id="profile" onClick={addActiveClass}><img src="/Assets/SVG/profile.svg"/> <h3>#Profile</h3></button>
                <button className={`${active === 'global' ? 'selected' : ''}`} id="global" onClick={addActiveClass}><img src="/Assets/SVG/global.svg"/> <h3>#Global</h3></button>
                <button className={`${active === 'support' ? 'selected' : ''}`} id="support" onClick={addActiveClass}><img src="/Assets/SVG/support.svg"/> <h3>#Support</h3></button>
                <button className={`${active === 'premium' ? 'selected' : ''}`} id="premium" onClick={addActiveClass}><img src="/Assets/SVG/sSettings.svg"/> <h3>#Setting</h3></button>
            </div>
        </div>
     );
};

export default Sidebar;