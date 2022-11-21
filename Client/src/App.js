import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Matches from "./Pages/Matches";
import Global from "./Pages/Global";
import Login from "./Pages/Login";
import Notification from "./Pages/Notification";
import Profile from "./Pages/Profile";
import MyProfile from "./Pages/MyProfile";
import Welcome from "./Pages/Welcome";
import Premium from "./Pages/Premium";
import Payment from "./Pages/Payment";


import ADashboard from "./Pages/Admin/Home";
import ABilling from "./Pages/Admin/Billing";
import AProfile from "./Pages/Admin/Profile";
import AUser from "./Pages/Admin/Users";
import AMatch from "./Pages/Admin/Match";
import AGlobal from "./Pages/Admin/Global";
import ASignin from "./Pages/Admin/SignIn";
import Main from "./Components/layout/Main";
import "antd/dist/antd.css";
import "./Assets/Admin/styles/main.css";
import "./Assets/Admin/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/global" element={<Global />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notification" element={<Notification />} />

            <Route path="/signin" component={ASignin} />
          <Main>
            <Route exact path="/admin/dashboard" component={ADashboard} />
            <Route exact path="/admin/billing" component={ABilling} />
            <Route exact path="/admin/profile" component={AProfile} />
            <Route exact path="/admin/user" component={AUser} />
            <Route exact path="/admin/match" component={AMatch} />
            <Route exact path="/admin/global" component={AGlobal} />
          </Main>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
