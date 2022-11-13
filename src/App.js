import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Messages from './Pages/Messages';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/messages" element={<Messages/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
