import './App.css';
import Home from './pages/js/home';
import Login from './pages/js/login';
import TopBar from './components/js/topBar';
import Bottom from './components/js/bottom';
import Map from './pages/js/map';
import ModelPage from './pages/js/modelPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';




function App() {
  return (
    <div className="App">
      <Router>
      <TopBar/>
        <Routes>
          <Route path="/dashboard" element={<div className='appDashboard'> <Home /><Bottom/> </div>} />
          <Route path="/" element={<Login />} />
          <Route path="/map" element={<div className='appMap'><Map /><Bottom/> </div>} />
          <Route path="/model" element={<div className='appData'><ModelPage /><Bottom/> </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
