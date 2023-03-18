import React from "react";
import "./style.css";
import Input from "../../Input";
import Hero from "../../Hero";
import cocktailsData from "../Directory/cocktails.json";

const recommendCocktail = (fruit, mood, astrologicalSign) => {
  // Add your logic here to recommend a cocktail based on the user's selections
  // For now, we'll just return the first cocktail in the list as an example
  return cocktailsData.cocktails[0];
};


function Home() {
  const handleCocktailSelect = (fruit, mood, astrologicalSign) => {
    // Process the user's selections here
    console.log(fruit, mood, astrologicalSign);
  
    const recommendedCocktail = recommendCocktail(fruit, mood, astrologicalSign);
    console.log("Recommended cocktail:", recommendedCocktail);
  };
  

  return (
    <div>
      <Hero />
      <Input onCocktailSelect={handleCocktailSelect} />
    </div>
  );
}

export default Home;
