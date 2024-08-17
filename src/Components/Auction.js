import React from "react";
import NavigationBar from "./NavigationBar";
import NewFooter from "./NewFooter";
import AppointmentBooking from "./AppointmentBooking";
import pic1 from "../Images/auction1.png";
import { FaArrowRight } from "react-icons/fa6";
import pic2 from "../Images/auction2.png";
import "./Auction.css";
import ProjectsTitle from "./ProjectsTitle";
import pic3r from "../Images/A3-r.png";
import pic3bl from "../Images/A3-bl.png";
import pic3tl from "../Images/A3-tl.png";


export default function Auction(){
    return(
        <div className="Auction" >
            <NavigationBar/>
            <div className="row secOne">
                <div className="col">

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
            <div className="secTwo">
                <div className="row">
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
                    <div className="row pics">
                        <div className="col">
                            <div className="row">

                            <img src={pic3tl} alt="Car" className="pic3 tl"/>
                            </div>
                            <div className="row">

                            <img src={pic3bl} alt="Car" className="pic3 bl"/>
                            </div>
                        </div>
                        <div className="col">

                        <img src={pic3r} alt="Car" className="pic3 tbr"/>
                        </div>

                    </div>

                </div>
                <div className="ProjectCaseStudy">
                    <ProjectsTitle title={"Project Case Study"} size={"50px"}/>
                    <div className="textPart">
                    <div className="paragraph">
                        Our client envisioned a dynamic <strong>auction platform</strong> that would serve the needs of <strong>collectors</strong> and <strong>individuals looking to auction their assets</strong>. The goal was to develop a comprehensive website capable of accommodating the diverse requirements of these user groups. The challenge involved creating a platform that not only appealed to collectors in search of rare items but also provided a professional space for auction companies, all while remaining accessible to anyone eager to showcase and auction their valuable assets. The solution involved the careful design of an auction website that effortlessly brings together these distinct user segments, providing a user-friendly interface and robust functionality for a seamless auction experience for all.
                    </div>

                    <div className="title1">
                        Problem
                    </div>
                    <div className="paragraph">
                        The challenge stemmed from the outdated design of the previous website, presenting a user experience that was both visually antiquated and functionally confusing. Navigating the platform proved to be a daunting task for users, with unclear instructions hindering their ability to understand and execute actions efficiently. Compounding the issue, the website limited its scope to auctions exclusively focused on cars, resulting in a narrow range of available assets for users to transfer or bid on. 
                    </div>
                    </div>
                </div>
            </div>
            <AppointmentBooking/>
            <NewFooter/>
            
        </div>
    )
}