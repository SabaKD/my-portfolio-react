import React from "react";
import NavigationBar from "./NavigationBar";
import AboutmeHero from "./AboutmeHero";
import "./Aboutme.css";
import AboutmeSeperator from "./AboutmeSeperator";
import AboutmeSkillset from "./AboutmeSkillset";

export default function Aboutme(){
    return(
        <div>
            <NavigationBar/>
            
            <AboutmeHero/>
            <AboutmeSeperator title={"Skillset"}/>
            <AboutmeSkillset/>
        </div>
    )
}