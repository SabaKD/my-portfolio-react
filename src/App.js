import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';
import Auction from "./Components/Auction";
import Petlify from './Components/Petlify';
import Asappz from './Components/Asappz';
import Adaverse from './Components/Adaverse';

function App() {
  return (
    <Router>
      <div>
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutMe" element={<Aboutme />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Auction" element={<Auction />} />
          <Route path='/PetApp' element={<Petlify/>} />
          <Route path='/Asappz' element={<Asappz/>}/>
          <Route path='Adaverse' element={<Adaverse/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
