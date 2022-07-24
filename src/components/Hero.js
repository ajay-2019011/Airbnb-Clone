import React from "react";
import photogrid from '../images/photo-grid.png'
export default function Hero() {
  return (
    <div>
      <img id="photogrid" src={photogrid} alt="Not Found" />
      <h1 className="Content" id="heading">Online Experiences</h1>
      <p className="Content">
        Join unique interactive activities led by
        one of a kind hosts-all without leaving home.
      </p>
    </div>
  )
}