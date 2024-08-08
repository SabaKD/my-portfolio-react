import React from "react";
import NavigationBar from "./NavigationBar";
import NewFooter from "./NewFooter";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import "./Contact.css";

export default function Contact(){
    return(
        <div className="contact">
            <NavigationBar/>
            <div className="container box">
                <h1>You can contact me via </h1>
                <div className="links">
                <div className="link">
                    <span>
                        
                    <FaLinkedin size={50} color="#000000" />
                    
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/saba-kadkhoda-zadeh-9a746a103" className="icon" target="_blank" rel="noopener noreferrer">Saba Kadkhoda Zadeh</a>
                    </span>
                </div>
                <div className="link">
                    <span>
                        <FaGithub size={50} color="#000000" />
                    </span>
                    <span>
                        <a href="https://github.com/SabaKD" className="icon" target="_blank" rel="noopener noreferrer">SabaKD</a>
                    </span>
                </div>
                <div className="link">
                    <span>
                        <FaEnvelope size={50} color="#000000" />
                    </span>
                    <span>
                        <a href="mailto:saba.zadeh96@gmail.com" className="icon" target="_blank" rel="noopener noreferrer">saba.zadeh96@gmail.com</a>
                    </span>
                </div>
                </div>
                <h1>Or simply schedule a 30 mins meeting with me</h1>
                <a
                href="https://calendly.com/washingintroduction/30-mins-with-saba?month=2024-02"
                className="btn primary-button mt-4"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </a>
            </div>
            <NewFooter/>
            
        </div>
    )
}