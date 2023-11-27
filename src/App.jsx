import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Dishes from "./components/Dishes"



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
</main>

</div>
  )
}

export default App
