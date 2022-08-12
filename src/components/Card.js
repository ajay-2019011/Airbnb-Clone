import React from "react"

import Star from '../images/star.png'
export default function Card(props) {
  let stat="";
  if (props.status === "Online")
    stat="Online"
  return (
    <div className="card">

      {/* <div classame="badge">SOLD OUT</div> */}
      <img id="images" src={props.img} alt="Not Found" />
      <div id="card-content">  
        
        <img id="star" src={Star} alt="Not Found" />
        <span>
          {props.line1[0]} <span id="one"> {props.line1[1]} </span>
        </span>
        {stat === "Online" && <span className="status">{stat}</span>}
        <p>
          {props.line2}
        </p>
        <p>
          <span id="two">{props.line3[0]}</span> {props.line3[1]}
        </p>
        {props.openSpots===0 && <div className="badge">SOLD OUT</div>}
      </div>
    </div>
  )
}