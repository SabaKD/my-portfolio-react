
import React from "react";
import AboutmeHandleCertificates from "./AboutmeHandleCertificates";
import advui from "/Users/saba/Desktop/Shecodes/Portfolio/my-portfolio-react/src/Images/AdvanceUI.png";


export default function AboutmeCertificates(){
    const details=[
        {
            pic: advui,
            name: "name",
            institute: "institute",
            duration: "duration"
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