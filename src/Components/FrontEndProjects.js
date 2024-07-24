import React from "react";
import weather from "../Images/Weather.png";
import dic from "../Images/Dictionary.png";
import gitlogo from "../Images/github-icon.svg";
import netlogo from "../Images/netlify-icon.svg";
import "./FrontEndProjects.css";

export default function FrontEndProjects(){
    return(
        <div className="Frontprojects">
        <div className="container">
            <h2>React Projects</h2>
            
            <div className="row mb-5">
                <div className="col d-none d-xl-block">
                    <img src={weather} alt="weather app" className="heroImage"/>
                </div>
                <div className="col">
                    <h4>Weather App</h4>
                    <p>
                        This is a dark-mode react weather app which is open-sourced on Github and hosted on Netlify and reports live weather data and forecasts six days ahead.
                    </p>
                    <a href="https://github.com/SabaKD/react-weather-application" className="btn primary-button" target="_blank" rel="noreferrer">
                        <img src={gitlogo} className="icon" alt="Github"/> Github</a>
                    <a href="https://candid-chimera-4a761b.netlify.app" className="btn primary-button" target="_blank" rel="noreferrer">
                        <img src={netlogo} className="icon" alt="Netlify"/> Netlify</a>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <h4>Dictionary App</h4>
                    <p>A react Dictionary App with pictures which is open-sourced on Github and hosted on Netlify and uses Shecodes Dictionary API
                    </p>
                    <a href="https://github.com/SabaKD/dictionary-react-project" className="btn primary-button" target="_blank" rel="noreferrer">
                        <img src={gitlogo} className="icon" alt="Github"/> Github</a>
                    <a href="https://react-dictionary-app-saba.netlify.app" className="btn primary-button" target="_blank" rel="noreferrer">
                        <img src={netlogo} className="icon" alt="Netlify"/> Netlify</a>
                </div>
                <div className="col d-none d-xl-block">
                    <img src={dic} alt="dictionary" className="heroImage"/>
                </div>
            </div>
            
            
        </div>
        <div class="black-rectangle"></div>
    </div>
    )
}