
import React from "react";


export default function AboutmeHandleDescription(props){
    return(
        <div className="AboutmeHandleDescription">
            {props.description.map((des,index)=>(
            <div className="row exp">
               <div className="col-3 date">
                   {des.date}
               </div>
               <div className="col-9 description">
                   
                   <div className="title">
                   {des.title}
                   </div>
                   <div className="text">
                   {des.text1}
                   </div>
                   <div className="subTitle">
                   {des.subTitle}
                   </div>
                   <div className="text">
                   {des.text2}
                   </div>
                   <ul className="text">
                       <li>
                           {des.bullet1}
                       </li>
                       <li>
                           {des.bullet2}
                       </li>
                       <li>
                           {des.bullet3}
                       </li>
                   
                   </ul>
               </div>
           </div>
           ))}
        </div>
    )
}