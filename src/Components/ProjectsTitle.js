import React from "react";
import "./ProjectsTitle.css"

export default function ProjectsTitle(props) {
    
    const titleStyle = {
        fontSize: props.size // Dynamically set the font size
    };

    return (
        <div className="ProjectsTitle" >
            <h1 className="title" style={titleStyle}>{props.title}</h1>
        </div>
    );
}
