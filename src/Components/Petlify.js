import React from "react";
import NavigationBar from "./NavigationBar";
import UnderConstruction from "../Images/under-construction.png";

export default function Petlify(){
    return(
        <div>
            <NavigationBar/>
            <img src={UnderConstruction} className="w-100" alt="under construction"/>
        </div>
    )
}