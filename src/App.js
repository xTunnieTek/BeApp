import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
<<<<<<< HEAD
import Messages from './Pages/Messages';
import Matches from './Pages/Matches';
import Global from './Pages/Global';
import Premium from './Pages/Premium';
import Payment from './Pages/Payment';

=======
import Login from './Pages/Login';
import PreProfile from './Pages/Pre-Profile';
import Welcome from './Pages/Welcome';
import Test from './Pages/Matches';
>>>>>>> ab127c563ec7ed1ebf4cf7ddd47be775c2717a21
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/pre-profile" element={<PreProfile/>} />
            <Route path="/home" element={<Home/>} />
<<<<<<< HEAD
            <Route path="/messages" element={<Messages/>} />
            <Route path="/matches" element={<Matches/>} />
            <Route path="/global" element={<Global/>} />
            <Route path="/premium" element={<Premium/>} />
            <Route path="/payment" element={<Payment/>} />
=======
            <Route path="/test" element={<Test/>} />
>>>>>>> ab127c563ec7ed1ebf4cf7ddd47be775c2717a21
          </Routes>
        </Router>
    </div>
  );
}

export default App;
