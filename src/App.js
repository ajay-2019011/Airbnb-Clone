
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./cardsData"

export default function App() {
  const cardsElements = cardsData.map((ele) => {
    return <Card
            key={ele.id}
            img={ele.img}
            line1={ele.line1}
            line2={ele.line2}
            line3={ele.line3}
           />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        {cardsElements}
      </div>
    </div>
  );
}
