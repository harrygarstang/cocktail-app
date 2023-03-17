import React from "react";
import "./style.css";
import background from "./cocktailHero.jpg";
import Typed from "react-typed"

function Hero() {
    return (
      <div className="hero text-center" style={{ backgroundImage: `url(${background})` }}>
        <h1>Hey, looking for your tropical Cocktail match?</h1>
       <Typed className="type-text"
        strings={[ 
              "It's right here, based on your mood, start sign and favorite fruit.",
            ]}
            typeSpeed={60}
          /> 
      </div>
      
    );
  }
  
  export default Hero;