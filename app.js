import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

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
  );
}

function displayFact(e) {
  console.log("event fired");
  const funFact = animals[e.target.alt].facts;
  const randomNumber = Math.floor(Math.random() * funFact.length);
  const factToDisplay = funFact[randomNumber];
  return (document.getElementById("fact").innerHTML = factToDisplay);
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
