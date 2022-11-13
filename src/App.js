import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/layout" element={<MainLayout/>} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
