import React from "react";
import NavigationBar from "./NavigationBar";
import Hero from './Hero';
import UXProjects from './UXProjects';
import FrontEndProjects from './FrontEndProjects';
import AppointmentBooking from './AppointmentBooking';
import NewFooter from './NewFooter';

export default function HomePage(){
    return(
        <div>
            <NavigationBar/>
            <Hero/>
            <UXProjects/>
            <FrontEndProjects/>
            <AppointmentBooking/>
            <NewFooter/>

        </div>
    )
}