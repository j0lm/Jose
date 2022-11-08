import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/homepage/Home.jsx'

function App() {
  const wrapper = document.getElementById("bubble-wrapper");

  const animateBubble = x => {
    console.log(x);
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    wrapper.appendChild(bubble);
    setTimeout(() => wrapper.removeChild(bubble), 1000);
  }
  window.onmousemove = e => animateBubble(e.clientX);
  return (
    <div className="App">
      <div id='bubble-wrapper'></div>
      <Navbar />
      <Home />
    </div>
  );
}




export default App;