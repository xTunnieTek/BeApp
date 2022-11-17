import "../Assets/CSS/MainLayout.css";
import React, { useState, useEffect } from "react";
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import DefaultImage from "../Assets/Images/Avatar/default-user-img.png"
import Logout from "../Assets/SVG/Logout.svg";
import Home from "../Assets/SVG/home.svg";
import Messages from "../Assets/SVG/messages.svg";
import Profile from "../Assets/SVG/profile.svg";
import Global from "../Assets/SVG/global.svg";
import Support from "../Assets/SVG/support.svg";
import Setting from "../Assets/SVG/settings.svg";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  const [active, setActive] = useState("");
  const auth = getAuth();
  const [user, setUser] = React.useState([]);
  const [userImg, setUserImg] = React.useState(DefaultImage);
  const userId = localStorage.getItem("UserId");
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users/user", {
        params: { userId },
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  // Set the active state to the clicked button and selected the active class
  const addActiveClass = (e) => {
    const clicked = e.target.id;
    if (active === clicked) {
      setActive(clicked);
    } else {
      setActive(clicked);
      window.location.href = clicked || "404";
    }
  };
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="Sidebar">
      <div className="profile">
        <a href="#">
          <img className="avatar" src={userImg} />
        </a>
        <h3>{user ? user.name : ""}</h3>
      </div>
      <div className="match">
        <div className="images">
          <img id="matches" onClick={addActiveClass} src={Avatar} />
        </div>
      </div>
      <div className="menu">
        <button
          className={`${active === "home" ? "selected" : ""}`}
          id="home"
          onClick={addActiveClass}
        >
          <img src={Home} />{" "}
          <h3
            className={`${active === "home" ? "selected" : ""}`}
            id="home"
            onClick={addActiveClass}
          >
            #Home
          </h3>
        </button>
        <button
          className={`${active === "messages" ? "selected" : ""}`}
          id="messages"
          onClick={addActiveClass}
        >
          <img src={Messages} /> <h3>#Messages</h3>
        </button>
        <button
          className={`${active === "myprofile" ? "selected" : ""}`}
          id="myprofile"
          onClick={addActiveClass}
        >
          <img src={Profile} /> <h3>#Profile</h3>
        </button>
        <button
          className={`${active === "global" ? "selected" : ""}`}
          id="global"
          onClick={addActiveClass}
        >
          <img src={Global} /> <h3>#Global</h3>
        </button>
        <button
          className={`${active === "support" ? "selected" : ""}`}
          id="support"
          onClick={addActiveClass}
        >
          <img src={Support} /> <h3>#Support</h3>
        </button>
        <button
          className={`${active === "premium" ? "selected" : ""}`}
          id="premium"
          onClick={addActiveClass}
        >
          <img src={Setting} /> <h3>#Premium</h3>
        </button>
        <button
          className={`${active === "logout" ? "selected" : ""}`}
          id="login"
          onClick={logout}
        >
          <img src={Logout} /> <h3>#Logout</h3>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
