import './App.css';
import Home from './pages/js/home';
import Login from './pages/js/login';
import TopBar from './components/js/topBar';
import Bottom from './components/js/bottom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<div className='appDashboard'> <TopBar/><Home /><Bottom/> </div>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
