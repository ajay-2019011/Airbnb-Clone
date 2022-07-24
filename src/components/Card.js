import React from "react"

import Star from '../images/star.png'
export default function Card(props) {
  return (
    <div>
      <img id="katie" src={props.img} alt="Not Found" />
      <div id="card-content">  
        <img id="star" src={Star} alt="Not Found" />
        <span>
          {props.line1[0]} <span id="one"> {props.line1[1]} </span>
        </span>
        <p>
          {props.line2}
        </p>
        <p>
          <span id="two">{props.line3[0]}</span> {props.line3[1]}
        </p>
      </div>
    </div>
  )
}