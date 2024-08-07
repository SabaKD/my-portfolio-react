import React from "react";
import NavigationBar from "./NavigationBar";
import AboutmeHero from "./AboutmeHero";
import "./Aboutme.css";
import AboutmeSeperator from "./AboutmeSeperator";
import AboutmeSkillset from "./AboutmeSkillset";
import AboutmeWorkExperience from "./AboutmeWorkExperience";
import AboutmeCertificates from "./AboutmeCertificates";

export default function Aboutme(){
    return(
        <div>
            <NavigationBar/>
            
            <AboutmeHero/>
            <AboutmeSeperator title={"Skillset"}/>
            <AboutmeSkillset/>
            <AboutmeSeperator title={"Work Experience"}/>
            <AboutmeWorkExperience/>
            <AboutmeSeperator title={"Education & Certificates"}/>
            <AboutmeCertificates/>

        </div>
    )
}