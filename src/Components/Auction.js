import React from "react";
import NavigationBar from "./NavigationBar";
import NewFooter from "./NewFooter";
import AppointmentBooking from "./AppointmentBooking";
import pic1 from "../Images/auction1.png";
import { FaArrowRight } from "react-icons/fa6";
import pic2 from "../Images/auction2.png";
import "./Auction.css";

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
            <AppointmentBooking/>
            <NewFooter/>
            
        </div>
    )
}