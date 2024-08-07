import React from "react";
import AboutmeHandleDescription from "./AboutmeHandleDescription";


export default function AboutmeWorkExperience(){
    const description=[
        {
            date: "07/2023 - 01/2024",
            title: "Asappz",
            text1:"Asappz is a forward-thinking technology company dedicated to facilitating the growth and enhancing user-centric experiences for our clients, empowering them to better understand and respond to the needs of their users.",
            subTitle:"My responsibility",
            text2:"As the only UX designer Implemented user-focused designs approach, incorporated regular user testing and diverse perspectives for refined experiences. Established cross-functional collaboration with developers and iterative design processes, driving continual improvements in product interfaces.",
            bullet1:"Creating new features",
            bullet2:"Designing wireframes and prototype for user testing",
            bullet3:"Creating brand guide for each project"
        },
        {
            date: "11/2022 - 06/2023",
            title: "Amadeus IT group",
            text1:"Amadeus is a major Spanish multinational technology company that provides software solutions for the global travel and tourism industry. It is the world's leading provider of travel technology that focus on developing software for airlines, hotels, travel agencies, and other travel-related businesses to enhance their operations and customer experiences.",
            subTitle:"My responsibility",
            text2:"Created the prototype of a user-centered website for finding flights and accommodations.",
            bullet1:"Maintain the design system",
            bullet2:"Creating new features",
            bullet3:"Creating brand guide for each project"
        },
        {
            date: "01/2019 - 08/2022",
            title: "Adaverse",
            text1:"Adaverse Solutions is a dynamic software development company that guides clients through a comprehensive journey, from idea validation and generation to meticulous marketing strategies and UX/UI research, culminating in the delivery of fully developed and user-ready products and websites. ",
            subTitle:"My responsibility",
            text2:"As part of the UX teamI helped with their projects",
            bullet1:"Prototyping",
            bullet2:"Creating new features",
            bullet3:"Creating brand guide"
        },
        {
            date: "10/2021 - 09/2022",
            title: "UX Land",
            text1:"UXland is a women-owned digital product agency and online school based in Seattle, Washington.",
            subTitle:"My responsibility",
            text2:"Assistant of the teacher in UX Fundamental and UX/UI in action course",
            bullet1:"Gave feedback to help them improve",
            bullet2:"Monitored 50 students performance ",
            bullet3:"Analyzed individual records to assess progress."
        },
    ]
    return(
       <div className="AboutmeWorkExperience container">
           <AboutmeHandleDescription description={description}/>
       </div>
    )
}