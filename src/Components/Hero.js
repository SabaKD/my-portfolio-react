import React from "react";
import heroImage from "../Images/croped pic.jpg";
import "../Hero.css";

export default function Hero(){
    return(
        <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col d-none d-xl-block">
                    <img src={heroImage} alt="saba zadeh" className="heroImg"/>
                </div>
                <div className="col">
                    <h1>Saba Zadeh</h1>
                    <h3>UX/UI Designer</h3>
                    <p className="p1">With over <strong>four</strong> years of UX design experience, I blend <strong>fast
                            learning</strong> with <strong>creative</strong> flair. My mathematical foundation sharpens my <strong>problem-solving</strong> skills, allowing me to approach design challenges with
                        precision
                        and create <strong>user-centered</strong> designs for my clients.
                    </p>
                    <p className="p2">
                        Let me bring my unique blend of creativity and analytical thinking to elevate your userexperiences and contribute to
                        the success of your projects.</p>
                    <a href="/" className=" btn primary-button">Contact me</a>
                </div>
            </div>
        </div>
        <div class="black-rectangle"></div>
        </div>
    );
}