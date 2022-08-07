
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import cardsData from "./cardsData"

export default function App() {
  const cardsElements = cardsData.map((ele) => {
    return <Card
            key={ele.id}
            element={ele}
           />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        {cardsElements}
      </div>
      <Footer />
    </div>
  );
}
