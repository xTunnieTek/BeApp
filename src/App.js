import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PreProfile from './Pages/Pre-Profile';
import Welcome from './Pages/Welcome';
import Test from './Pages/Matches';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/pre-profile" element={<PreProfile/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/test" element={<Test/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
