
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        //require() to send the image locally
        img={require("./images/katie-zaferes.png")}
        line1={[" 5.0", " (6) USA"]}
        line2="Life Lessons with Katie Zaferes"
        line3={["From $136 ", "/ person"]}
      />
    </div>
  );
}
