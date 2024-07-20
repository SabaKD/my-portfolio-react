import React from 'react';
import './App.css';
import Hero from './Hero';
import UXProjects from './UXProjects';
import FrontEndProjects from './FrontEndProjects';
import Recommendations from './Recommendations';
import AppointmentBooking from './AppointmentBooking';
import NewFooter from './NewFooter';

function App() {
  return (
    <div className="App">
      <Hero/>
      <UXProjects/>
      <FrontEndProjects/>
      <Recommendations/>
      <AppointmentBooking/>
      <NewFooter/>
    </div>
  );
}

export default App;
