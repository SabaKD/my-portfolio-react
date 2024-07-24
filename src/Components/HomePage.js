import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Hero from './Hero';
import UXProjects from './UXProjects';
import FrontEndProjects from './FrontEndProjects';
import AppointmentBooking from './AppointmentBooking';
import NewFooter from './NewFooter';

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <NavigationBar />
      <Hero />
      <UXProjects />
      <FrontEndProjects />
      <AppointmentBooking />
      <NewFooter />
    </div>
  );
}
