import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Matches from './Pages/Matches';
import Global from './Pages/Global';
import Premium from './Pages/Premium';
import Payment from './Pages/Payment';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/matches" element={<Matches/>} />
            <Route path="/global" element={<Global/>} />
            <Route path="/premium" element={<Premium/>} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
