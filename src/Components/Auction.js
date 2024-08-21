import React from "react";
import NavigationBar from "./NavigationBar";
import NewFooter from "./NewFooter";
import AppointmentBooking from "./AppointmentBooking";
import pic1 from "../Images/auction1.png";
import { FaArrowRight } from "react-icons/fa6";
import pic2 from "../Images/auction2.png";
import "./Auction.css";
import ProjectsTitle from "./ProjectsTitle";

import affinity from "../Images/affinity.png";
import sketch from "../Images/sketch.png";
import persona from "../Images/persona.png";
import iter1 from "../Images/iter1.png";
import iter2 from "../Images/iter2.png";
import overview from "../Images/overview.png";



export default function Auction(){
    return(
        <div className="Auction" >
            <NavigationBar/>
            <div className="secOne">
            <div className="row">
                <div className="col pix">

                <img src={pic1} alt="auction" className="heropic"/>
                </div>
                <div className="col">

                <a href="/" className=" btn secondary-button upper mb-5">Project Overview
                <FaArrowRight size={20} color="#000000" />
                </a>
                <br/>
                <a href="/" className=" btn secondary-button lower">Project Case Study
                <FaArrowRight size={20} color="#000000" />
                </a>
                </div>
            </div>
            </div>
            <div className="secTwo">
                <div className="row container">
                    <div className="col ml-5">
                        <img src={pic2} alt="auction"/>
                    </div>
                    <div className="col text">
                        BaT stands as a specialized auction platform, meticulously designed to cater to the discerning community of asset collectors, individuals looking to showcase their valuable possessions, and professional auctioneer companies alike. 
                        <br/>
                        <br/>
                        For those passionate about collecting unique assets, BaT offers a curated space where enthusiasts can discover and bid on a diverse range of items, from rare collectibles to valuable memorabilia.
                        <br/>
                        <br/>
                        Whether you're a collector hoping to part with a cherished possession or a professional auctioneer seeking a reputable online marketplace, BaT provides a secure and sophisticated environment to facilitate these transactions. The platform's commitment to security ensures that users can confidently engage in the buying and selling process, fostering trust and transparency throughout.
                    </div>
                </div>
            </div>
            <div className="secThree container">
                <div className="ProjectOverview">
                    <ProjectsTitle title={"Project Overview"} size={"50px"}/>
                    <div className="pics">
                        <img src={overview} alt="car"/>

                    </div>

                </div>
                <div className="ProjectCaseStudy">
                    <ProjectsTitle title={"Project Case Study"} size={"50px"}/>
                    <div className="textBox">
                        <div className="paragraph">
                            Our client envisioned a dynamic <strong>auction platform</strong> that would serve the needs of <strong>collectors</strong> and <strong>individuals looking to auction their assets</strong>. The goal was to develop a comprehensive website capable of accommodating the diverse requirements of these user groups. The challenge involved creating a platform that not only appealed to collectors in search of rare items but also provided a professional space for auction companies, all while remaining accessible to anyone eager to showcase and auction their valuable assets. The solution involved the careful design of an auction website that effortlessly brings together these distinct user segments, providing a user-friendly interface and robust functionality for a seamless auction experience for all.
                        </div>

                        <div className="title1">
                            Problem
                        </div>
                        <div className="paragraph">
                            The challenge stemmed from the outdated design of the previous website, presenting a user experience that was both visually antiquated and functionally confusing. Navigating the platform proved to be a daunting task for users, with unclear instructions hindering their ability to understand and execute actions efficiently. Compounding the issue, the website limited its scope to auctions exclusively focused on cars, resulting in a narrow range of available assets for users to transfer or bid on. 
                        </div>
                        <div className="paragraph">
                            Furthermore, the platform inundated users with unnecessary information, contributing to a cluttered interface that obscured the essential steps and details. The task at hand involved a comprehensive overhaul, aiming to transform the user interface into an intuitive and aesthetically pleasing space while broadening the asset offerings and streamlining information to enhance user clarity and engagement.                        
                        </div>
                        <div className="title1">
                            Solution
                        </div>
                        <div className="paragraph">
                            To address these challenges, our solution involved the development of a contemporary website with a modern and visually appealing UI design. Our focus was not only on aesthetic elements but also on creating a more structured platform that prioritizes user understanding and engagement. The redesign aimed to deliver a user-centered experience by simplifying navigation and providing clear instructions at every step.                         
                        </div>
                        <div className="paragraph">
                            To enhance the platform's versatility, we expanded the range of assets available for transfer, ensuring a diverse selection that caters to a broader audience. This strategic approach aimed to strike a balance between visual appeal and functionality, ultimately resulting in a revamped website that not only looks modern but also offers a seamless and user-friendly experience for individuals looking to transfer a variety of valuable assets.                        
                        </div>
                        <div className="title1">
                            Design Process
                        </div>
                        <div className="title2">
                            Research
                        </div>
                        <div className="paragraph">
                            The stakeholder initially shared data from the previous website and insights from interviews. Alongside this, we delved into a nuanced examination of pre-existing interviews, capturing valuable insights into user experiences. Recognizing the necessity for a holistic approach, we extended our exploration through extensive internet research and collaborative brainstorming sessions within the team. However, cognizant of the dynamic nature of user preferences and needs, we took an additional step to conduct targeted interviews with potential customers identified by the stakeholder. 
                        </div>
                        <div className="title2">
                            Identifying user needs
                        </div>
                        <div className="paragraph">
                            Our iterative approach allowed us to triangulate information, blending existing data with fresh perspectives, refining our understanding, and paving the way for a more informed and effective decision-making process. We considered each challenge and struggle the users went through and try to address them a solution. Breaking down the big challenges to several small ones helped us identify the solution easier and faster. 
                        </div>
                        <div className="title2">
                            How Might We...? (HMW)
                        </div>
                        <div className="paragraph">
                            In addressing the identified issues, our problem-solving methodology incorporated various approaches, with the "How Might We" (HMW) technique playing a pivotal role. This method proved instrumental in reframing challenges as opportunities for innovation, fostering creative thinking, and generating diverse solutions. By leveraging the HMW approach, we cultivated a collaborative mindset within the team and arrived at innovative, user-centric solutions to effectively tackle the identified problems.
                        </div>
                        <div className="image">
                            <img src={affinity} alt="affinity"/>
                        </div>
                        <div className="title2">
                            Sketch
                        </div>
                        <div className="paragraph">
                            Following the identification of key issues with the team, I initiated the solution phase by sketching the website. This hands-on approach allowed for a visual exploration of potential design solutions. Integrating insights gained from problem identification, the sketching process became a dynamic tool to iteratively address and refine various challenges. By maintaining a fluid connection between problem-solving and design, we ensured that the evolving website prototype not only tackled the initially identified issues but also preemptively addressed potential challenges, fostering a more holistic and effective design solution.
                        </div>
                        <div className="image">
                            <img src={sketch} alt="affinity"/>
                        </div>
                        <div className="paragraph">
                            Subsequently, I proceed to low-fidelity designs, a pivotal step that significantly aided in streamlining the user journey. Through this process, I was able to distill the complexities into a visualized and structured format, enhancing the overall clarity and coherence of the user experience. The low-fidelity designs served as a foundational framework, allowing for a more focused and iterative approach to refining the user journey, ultimately contributing to a more intuitive and user-friendly final design.
                        </div>
                        <div className="title2">
                            Persona
                        </div>
                        <div className="paragraph">
                            After the first usability test, I realized the stakeholder did not consider one important user group "Auction companies" so as I presented the issue to them we decided to redefine our personas as follows.
                        </div>
                        <div className="image">
                            <img src={persona} alt="affinity"/>
                        </div>
                        <div className="title2">
                            Usability and Iterations
                        </div>
                        <div className="paragraph">
                            We did several iterations and usability testing to get to our final design.
                        </div>
                        <div className="image">
                            <img src={iter1} alt="affinity"/>
                        </div>
                        <div className="image">
                            <img src={iter2} alt="affinity"/>
                        </div>
                        <div className="title2">
                            Final Design
                        </div>
                        <div className="paragraph">
                            After initially encountering challenges with the HiFi design, we embarked on a journey of iterative improvement driven by thorough usability testing. Through multiple iterations, we diligently addressed usability issues and refined the design to enhance user experience. Eventually, our dedication and perseverance led us to achieve a final design that seamlessly integrates functionality and aesthetics. This collaborative process not only resulted in a highly user-friendly product but also fostered a deeper understanding of user needs and preferences.
                        </div>
                        <div className="image">
                            <img src={overview} alt="affinity"/>
                        </div>
                    </div>
                </div>
            </div>
            <AppointmentBooking/>
            <NewFooter/>
            
        </div>
    )
}