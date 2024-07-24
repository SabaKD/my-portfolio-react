import React from "react";
import "./AppointmentBooking.css"

export default function AppointmentBooking(){
    return(
        <div className="AppointmentBooking">
            <div className="container">
            <div className="giveMeACall">
                <h2>
                    Give me a call
                </h2>
                <p>
                    Schedule a One-on-One 30 minutes call with me with me in Calendly
                </p>
                <a href="https://calendly.com/washingintroduction/30-mins-with-saba?month=2024-02"
                    class=" btn primary-button" target="_blank">Schedule a call</a>

            </div>
        </div>
        </div>
    )
}