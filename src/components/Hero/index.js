import React from "react";
import "./style.css";
import background from "./cocktailHero.jpg";
import Typed from "react-typed"


function Hero() {
    return (
      <div className="hero text-center" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="heroH1">Looking for casual sipping? <br />Find your perfect cocktail match</h1>
       <Typed className="type-text"
        strings={[ 
              "It's right here, based on your mood, star sign and favourite fruit.",
            ]}
            typeSpeed={60}
          /> 
      </div>
      
    );
  }
  
  export default Hero;