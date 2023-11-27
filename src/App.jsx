import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Dishes from "./components/Dishes"
import About from "./components/About"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Review from "./components/Review"



function App() {
  

  return (
<div >
    <Navbar/>
<main>
<div id="home">
  <Home/>
</div>

<div id="dishes">
  <Dishes/>
</div>

<div id="about">
  <About/>
</div>

<div id="menu">
  <Menu/>
</div>

<div>
  <Review/>
</div>
</main>
<Footer />
</div>
  )
}

export default App
