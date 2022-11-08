import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/homepage/Home.jsx'
import React, { useState, useEffect } from 'react';

function App() {
  
  const [mousePostition, setMousePosition] = useState(0);

  useEffect(() => {
    console.log(mousePostition);
    const wrapper = document.getElementById("bubble-wrapper");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${mousePostition}px`;
    wrapper.appendChild(bubble);
    setTimeout(() => wrapper.removeChild(bubble), 1000);
  });

  return (
    <div className="App" onMouseMove={(ev) => setMousePosition(ev.pageX)}>
      <div id='bubble-wrapper'></div>
      <Navbar />
      <Home />
    </div>
  );
}



const animateBubble = x => {
    
}


export default App;