import React from "react";
import logo from "../Images/Logo.png";

export default function NavigationBar(){
    return(
        <div className="NavigationBar sticky-top ">
        <div className="container">
        <nav className="d-flex justify-content-between">
            <a href="/">
            <img src={logo} alt="Saba Logo" className="logo" rel="noreferrer"/>
            </a>
            <ul>
                <li>
                    <a href="/" className=" active navMenu" title="Homepage">Home</a>

                </li>
                <li>
                    <a href="/#UXProjects" className="navMenu" title="Saba's UX Projects" rel="noreferrer">UX Projects</a>
                </li>
                <li>
                    <a href="/#ReactProjects" className="navMenu" title="Saba's react Projects" rel="noreferrer">React Projects</a>
                </li>
                <li>
                    <a href="/Aboutme" className="navMenu" title="About Saba" rel="noreferrer">About me</a>
                </li>
                <li>
                    <a href="https://calendly.com/washingintroduction/30-mins-with-saba?month=2024-02"
                        className=" btn primary-button" target="_blank" rel="noreferrer">Schedule a call</a>
                </li>
            </ul>
        </nav>
    </div>
    </div>
    )
}