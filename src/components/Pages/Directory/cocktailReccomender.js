import cocktailsData from './cocktails.json';


// This is how the weighting is calculated, so here the highest number (here it is mood)
// is the greatest weight. 
// (This may need to be adjusted more because whichever is the most weight at the moment is very dominant)
export const weights = {
    fruit: 4,
    mood: 3,
    astrologicalSign: 1,
  };  



  export const recommendCocktail = (fruit, mood, astrologicalSign) => {

    console.log(fruit)
    console.log(mood)
    console.log(astrologicalSign)

    let maxScore = -1;
    let recommendedCocktail = null;
  
    // this iterates over each cocktail in the data
    cocktailsData.cocktails.forEach((cocktail) => {
      let score = 0;
  
      // adds  appropriate weight to  score if  cocktail matches  selected fruit
      if (cocktail.fruit === fruit) {
        score += weights.fruit;
      }
  
      // adds appropriate weight to  score if cocktail matches selected mood
      if (cocktail.mood === mood) {
        score += weights.mood;
      }
  
      // adds appropriate weight to score if cocktail matches selected star sign
      if (cocktail.astrologicalSign === astrologicalSign) {
        score += weights.astrologicalSign;
      }
  
      // If the score of the cocktail is bigger than the previous max score,
      // this updates maximum score and recommendeds cocktail
      if (score > maxScore) {
        maxScore = score;
        recommendedCocktail = cocktail;
      }
    });
    return recommendedCocktail;
  };