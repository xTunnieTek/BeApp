import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Matches from './Pages/Matches';
import Global from './Pages/Global';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
import PreProfile from './Pages/Pre-Profile'
import Welcome from './Pages/Welcome';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Welcome/>} />
            <Route path="/preprofile" element={<PreProfile/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/matches" element={<Matches/>} />
            <Route path="/global" element={<Global/>} />
            <Route path="/notification" element={<Notification/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;