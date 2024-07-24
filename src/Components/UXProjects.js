import React from "react";
import bat from "../Images/BAT banner.png";
import pet from "../Images/Petlify banner.png";
import asappz from "../Images/Assapz banner.png";
import ada from "../Images/Adaverse banner.png";
import "./UXProjects.css";

export default function UXProjects(){
    return(
        <div className="projects">
        <div className="container">
            <h2>Projects</h2>
            
            <div className="row mb-5">
                <div className="col d-none d-xl-block">
                    <img src={bat} alt="Auction project case study" className="heroImage"/>
                </div>
                <div className="col">
                    <h4>Auction Website</h4>
                    <p>BaT is an auction website tailored for enthusiasts who appreciate collecting valuable assets,
                        catering to both
                        individuals seeking to auction their prized possessions and professional auctioneer companies.
                    </p>
                    <a href="/Auction" className="btn primary-button">Read more</a>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <h4>Pet App</h4>
                    <p>An all-inclusive website that you can buy/sell different kind of pets and also you can manage the
                        pets you already have
                        and also a community of pet owners that you can share posts with each other.
                    </p>
                    <a href="/PetApp" className="btn primary-button">Read more</a>
                </div>
                <div className="col d-none d-xl-block">
                    <img src={pet} alt="pet app case study" className="heroImage"/>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col d-none d-xl-block">
                    <img src={asappz} alt="website redesign case study" className="heroImage"/>
                </div>
                <div className="col">
                    <h4>Website Redesign</h4>
                    <p>A tech-based company needed a new website that can get more customers and also showcase their
                        previous projects and show
                        potential customers what services they offer.
                    </p>
                    <a href="/Asappz" className="btn primary-button">Read more</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Adaverse</h4>
                    <p>Adaverse Solutions is a England-based dynamic software development company that they help users
                        through the whole
                        journey of their products and I collaborated on several projects with them.
                    </p>
                    <a href="/Adaverse" className="btn primary-button">Read more</a>
                </div>
                <div className="col d-none d-xl-block">
                    <img src={ada} alt="website redesign case study" className="heroImage"/>
                </div>
            </div>
        </div>
    </div>
        
    );
}