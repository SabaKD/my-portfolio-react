import React from "react";
import AboutmeTags from "./AboutmeTags";


export default function AboutmeHandleTags(props){
    
    
    return(
        <div className="AboutmeHandleTags container">
             
           <div className="row set">
    <div className="col-3 title">
        {props.taglist[props.taglist.length - 1]}
    </div>
    <div className="col-9 tags">
        {props.taglist.slice(0, -1).map((t, index) => (
            <AboutmeTags key={index} tag={t} />
        ))}
    </div>
</div>
           
            

        </div>
    )
}