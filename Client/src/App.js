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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
