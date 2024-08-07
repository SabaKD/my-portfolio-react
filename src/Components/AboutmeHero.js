import React from "react";
import pic from '../Images/AboutmePic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function AboutmeHero(){
    return(
        <div className="AboutmeHero">
            <div className="row">
                <div className="col text">
                    <h1>Saba Zadeh</h1>
                    <h2>UX/UI Designer</h2>
                    <ul>
                        <li>
                            +5 years of experience
                        </li>
                        <li>
                            Certified in multiple UX/UI courses
                        </li>
                        <li>
                            Certified in multiple coding courses
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <img src={pic} alt="Saba"/>
                    <div className="icons">
                    <a href="https://www.linkedin.com/in/saba-kadkhoda-zadeh-9a746a103" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={50} color="#000000" />
                    </a>
                    
                    <a href="mailto:saba.zadeh96@gmail.com" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={50} color="#000000" />
                    </a>
                    <a href="https://github.com/SabaKD" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={50} color="#000000" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}