
import React from "react";
import AboutmeHandleCertificates from "./AboutmeHandleCertificates";
import advui from "/Users/saba/Desktop/Shecodes/Portfolio/my-portfolio-react/src/Images/AdvanceUI.png";
import funuxland from "../Images/UXLand.png";
import figmeg from "../Images/FigmaMega.png";
import introtocode from "../Images/IntroToCoding.png";
import introtowebdev from "../Images/IntroToWebDev.png";
import webdev from "../Images/Webdev.png";
import adwebdev from "../Images/AdWebDev.png";
import resp from "../Images/responsive1 1.png";
import adresp from "../Images/advance res 1.png";
import introtoai from "../Images/IntroToAI.png";
import ailink from "../Images/Using AI in the UX Design Process 1.png";
import cro from "../Images/CertificateOfCompletion_Marketing Conversion Rate Optimization_page-0001 1.png";
import access from "../Images/accebility-first design 1.png";
import diploma from "../Images/dip.png";
import desbetter from "../Images/desbetter.png"
import udessen from "../Images/udemz essentials 1.png";
import reac from "../Images/react 1.png";
import advreac from "../Images/react adv 1.png";



export default function AboutmeCertificates(){
    const details=[
        {
            pic: advui,
            name: "Advanced UI",
            institute: "UX Land",
            duration: "6 months"
        },
        {
            pic: funuxland,
            name: "Fundamental of UX and UX/UI in action",
            institute: "UX Land",
            duration: "10 months"
        },
        
        {
            pic: desbetter,
            name: "Design for a Better World with Don Norman",
            institute: "Interaction Design Foundation (IxDF)",
            duration: "13 hours 05 minutes spread over 7 weeks"
        },
        {
            pic: udessen,
            name: "Figma UI/Ux Design Essentials",
            institute: "Udemy",
            duration: "12 hours"
        },
        {
            pic: figmeg,
            name: "UI/UX design beginner to expert",
            institute: "Udemy",
            duration: "24 hours"
        },
        {
            pic: diploma,
            name: "Junior Front-End Developer",
            institute: "Shecodes",
            duration: "8 months"
        },
        {
            pic: reac,
            name: "React Development",
            institute: "SheCodes",
            duration: "6 Weeks"
        },
        {
            pic: advreac,
            name: "Advanced React Development",
            institute: "SheCodes",
            duration: "2 Weeks"
        },
        {
            pic: adresp,
            name: "Advance responsive web development",
            institute: "SheCodes",
            duration: "2 Weeks"
        },
        {
            pic: resp,
            name: "Responsive web development",
            institute: "SheCodes",
            duration: "5 Weeks"
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
            pic: introtoai,
            name: "Introduction to Artificial Intelligence",
            institute: "SheCodes",
            duration: "2 Weeks"
        },
        
        {
            pic: ailink,
            name: "Using AI in the UX design Process",
            institute: "Linkedin",
            duration: "1 hour 07 minutes"
        },
        {
            pic: cro,
            name: "Marketing: Conversion Rate Optimisation (CRO)",
            institute: "Linkedin",
            duration: "58 minutes"
        },
        {
            pic: access,
            name: "Introduction to Artificial Intelligence",
            institute: "Linkedin",
            duration: "1 hours 24 minutes"
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