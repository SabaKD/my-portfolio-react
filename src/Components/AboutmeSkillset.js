import React from "react";
import AboutmeTags from "./AboutmeTags";


export default function AboutmeSkillset(){
    const tags= [
        {
            0 : "Design Thinking",
            1 : "User Research"
        }
    ]
    return(
        <div className="container AboutmeSkillset">
            
            <div className="row set">
                <div className="col-2 title">
                    UX/UI Design
                </div>
                <div className="col-10 tags">
                    <AboutmeTags tag={"Design Thinking"} />
                    <AboutmeTags tag={"User Research"} />
                    <AboutmeTags tag={"Visual Design"} />
                    <AboutmeTags tag={"Information Architecture"} />
                    <AboutmeTags tag={"WCGA 2.0"} />
                    <AboutmeTags tag={"Interaction Design"} />
                    <AboutmeTags tag={"Design Systems"} />
                    <AboutmeTags tag={"Usability Test"} />
                    <AboutmeTags tag={"Product design"} />
                
                </div>
            </div>
            <div className="row set">
                <div className="col-2 title">
                    Prototyping
                </div>
                <div className="col-10 tags">
                    <AboutmeTags tag={"Wireframing "} />
                    <AboutmeTags tag={"Responsive Design"} />
                    <AboutmeTags tag={"Concept sketch"} />
                    
                
                </div>
            </div>
            <div className="row set">
                <div className="col-2 title">
                    Research
                </div>
                <div className="col-10 tags">
                    <AboutmeTags tag={"competitive analysis"} />
                    <AboutmeTags tag={"User Persona Creation"} />
                    <AboutmeTags tag={"Stakeholder management"} />
                    <AboutmeTags tag={"User-centered design"} />
                    <AboutmeTags tag={"Interview"} />
                    <AboutmeTags tag={"Design thinking"} />
                    <AboutmeTags tag={"Stakeholder management"} />
                    <AboutmeTags tag={"CRO"} />
                   
                
                </div>
            </div>
            <div className="row set">
                <div className="col-2 title">
                    Design Tools
                </div>
                <div className="col-10 tags">
                    <AboutmeTags tag={"Figma"} />
                    <AboutmeTags tag={"Adobe XD"} />
                    <AboutmeTags tag={"Sketch"} />
                    <AboutmeTags tag={"Miro"} />
                    <AboutmeTags tag={"Adobe illustrator"} />
                    <AboutmeTags tag={"Photoshop"} />
                    
                   
                
                </div>
            </div>
            <div className="row set">
                <div className="col-2 title">
                    Development Skills
                </div>
                <div className="col-10 tags">
                    <AboutmeTags tag={"CSS"} />
                    <AboutmeTags tag={"JavaScript"} />
                    <AboutmeTags tag={"HTML"} />
                    <AboutmeTags tag={"Bootstrap"} />
                    <AboutmeTags tag={"SEO"} />
                    <AboutmeTags tag={"React"} />
                    <AboutmeTags tag={"Python"} />
                    <AboutmeTags tag={"Responsive Design"} />
                   
                
                </div>
            </div>
            <div className="row set">
                <div className="col-2 title">
                    Soft Skills
                </div>
                <div className="col-10 tags">
                    <AboutmeTags tag={"Continuous Learning"} />
                    <AboutmeTags tag={"Adaptability"} />
                    <AboutmeTags tag={"Fast learner"} />
                    <AboutmeTags tag={"Agile Methodologies"} />
                    <AboutmeTags tag={"Creative"} />
                    <AboutmeTags tag={"Problem-solving"} />
                    <AboutmeTags tag={"Detail-oriented"} />
                    <AboutmeTags tag={"Data-Driven"} />
                   
                
                </div>
            </div>

        </div>
    )
}