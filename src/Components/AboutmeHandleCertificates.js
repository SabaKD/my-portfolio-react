

import React from "react";


export default function AboutmeHandleCertificates(props){
    
    
    return(
        <div className="AboutmeHandleCertificates">
             
           <div className="row">
               <div className="col-3">
                   <img src={props.data.pic} alt={props.data.name}/>
               </div>
               <div className="col-9">
                   <div className="title">
                       {props.data.name}
                   </div>
                   <div className="text">
                       <strong>Institute: </strong>{props.data.institute}
                   </div>
                   <div className="text">
                       <strong>Duration: </strong>{props.data.duration}
                   </div>
                   
               </div>
           </div>
            

        </div>
    )
}