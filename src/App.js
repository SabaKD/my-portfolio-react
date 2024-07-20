import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import NavigationBar from './Components/NavigationBar';
// import Hero from './Components/Hero';
// import UXProjects from './Components/UXProjects';
// import FrontEndProjects from './Components/FrontEndProjects';
// import Recommendations from './Components/Recommendations';
// import AppointmentBooking from './Components/AppointmentBooking';
// import NewFooter from './Components/NewFooter';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <div>
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutMe" element={<Aboutme />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
