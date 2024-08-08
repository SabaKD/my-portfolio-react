
import React from "react";
import AboutmeHandleCertificates from "./AboutmeHandleCertificates";
import advui from "/Users/saba/Desktop/Shecodes/Portfolio/my-portfolio-react/src/Images/AdvanceUI.png";
import funuxland from "../Images/UXLand.png";
import figmeg from "../Images/FigmaMega.png";
import introtocode from "../Images/IntroToCoding.png";
import introtowebdev from "../Images/IntroToWebDev.png";
import webdev from "../Images/Webdev.png";
import adwebdev from "../Images/AdWebDev.png";



export default function AboutmeCertificates(){
    const details=[
        {
            pic: advui,
            name: "Advanced UI",
            institute: "UX Land",
            duration: "Six months"
        },
        {
            pic: funuxland,
            name: "Fundamental of UX and UX/UI in action",
            institute: "UX Land",
            duration: "Ten months"
        },
        {
            pic: figmeg,
            name: "UI/UX design beginner to expert",
            institute: "Udemy",
            duration: "24 total hours"
        },
        {
            pic: introtocode,
            name: "Introduction to coding",
            institute: "SheCodes",
            duration: "3 Weeks"
        },
        {
            pic: introtowebdev,
            name: "Introduction to web development",
            institute: "SheCodes",
            duration: "3 Weeks"
        },
        {
            pic: webdev,
            name: "Web development",
            institute: "SheCodes",
            duration: "8 Weeks"
        },
        {
            pic: adwebdev,
            name: "Advanced web development",
            institute: "SheCodes",
            duration: "2 Weeks"
        },
        {
            pic: webdev,
            name: "Web development",
            institute: "SheCodes",
            duration: "8 Weeks"
        }
    ]
    return(
        <div className="AboutmeCertificates container">
             {details.map((detail,index)=>(
                 <AboutmeHandleCertificates data={detail}/>

             ))}
           
            

        </div>
    )
}