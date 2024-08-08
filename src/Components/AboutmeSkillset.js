import React from "react";
import AboutmeHandleTags from "./AboutmeHandleTags";


export default function AboutmeSkillset(){
    const tags= [
        [
            "Design Thinking",
            "User Research",
            "Visual Design",
            "Information Architecture",
            "WCGA 2.0",
            "Interaction Design",
            "Usability Test",
            "Product design",
            "UX/UI Design"
        ],
        [
            "Wireframing",
            "Responsive Design",
            "Concept sketch",
            "Prototyping"
        ],
        [
            "competitive analysis",
            "User Persona Creation",
            "Stakeholder management",
            "User-centered design",
            "Interview",
            "Design thinking",
            "Stakeholder management",
            "CRO",
            "Research"
        ],
        [
            "Figma",
            "Adobe XD",
            "Sketch",
            "Miro",
            "Adobe illustrator",
            "Photoshop",
            "Design Tools"
        ],
        [

            "CSS",
            "JavaScript",
            "HTML",
            "Bootstrap",
            "SEO",
            "React",
            "Python",
            "Responsive Design",
            "Development Skills"
        ],
        [
            "Continuous Learning",
            "Adaptability",
            "Fast learner",
            "Agile Methodologies",
            "Creative",
            "Problem-solving",
            "Detail-oriented",
            "Data-Driven",
            "Soft Skills"
        ]
    ]
    return(
        <div className="container AboutmeSkillset">
            {
                tags.map((tag , index)=>(
                    <AboutmeHandleTags taglist = {tag}/>
                ))
            }
        </div>
    )
}