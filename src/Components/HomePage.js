import React from "react";
import NavigationBar from "./NavigationBar";
import Hero from './Hero';
import UXProjects from './UXProjects';
import FrontEndProjects from './FrontEndProjects';
import Recommendations from './Recommendations';
import AppointmentBooking from './AppointmentBooking';
import NewFooter from './NewFooter';

export default function HomePage(){
    return(
        <div>
            <NavigationBar/>
            <Hero/>
            <UXProjects/>
            <FrontEndProjects/>
            <Recommendations/>
            <AppointmentBooking/>
            <NewFooter/>

        </div>
    )
}