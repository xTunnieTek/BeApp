<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Matches from './Pages/Matches';
import Global from './Pages/Global';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Matches from "./Pages/Matches";
import Global from "./Pages/Global";
import Login from "./Pages/Login";
import Notification from "./Pages/Notification";
<<<<<<< HEAD
<<<<<<< HEAD
import Profile from "./Pages/Profile";
import Welcome from "./Pages/Welcome";
import Premium from "./Pages/Premium";
import Payment from "./Pages/Payment";
>>>>>>> parent of 296e157c (Tuấn Update Profile)
=======
>>>>>>> parent of fdcf6ab3 (huy hom nay)
=======
>>>>>>> parent of fdcf6ab3 (huy hom nay)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <Router>
          <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/matches" element={<Matches/>} />
            <Route path="/global" element={<Global/>} />
            <Route path="/notification" element={<Notification/>} />
          </Routes>
        </Router>
=======
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/global" element={<Global />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Router>
>>>>>>> parent of 296e157c (Tuấn Update Profile)
    </div>
  );
}

export default App;
