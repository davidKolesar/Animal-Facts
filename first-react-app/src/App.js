import logo from './logo.svg';
import './App.css';
import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";


function displayFact(e) {
  const funFact = animals[e.target.alt].facts;
  const randomNumber = Math.floor(Math.random() * funFact.length);
  const factToDisplay = funFact[randomNumber];
  return (document.getElementById("fact").innerHTML = factToDisplay);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
		
//React DOM pattern
const container = document.getElementById("app");
const root = createRoot(container);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    ></img>
  )
}

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg"></img>
);
const title = "";
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title};</h1>
    <p id="fact"></p>
    {background}
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
