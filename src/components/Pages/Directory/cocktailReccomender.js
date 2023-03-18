import cocktailsData from './cocktails.json';

export const weights = {
  fruit: 1,
  mood: 2,
  astrologicalSign: 3,
};

export const recommendCocktail = (fruit, mood, astrologicalSign) => {
    let maxScore = -1;
    let recommendedCocktail = null;
  
    cocktailsData.cocktails.forEach((cocktail) => {
      let score = 0;
  
      if (cocktail.fruit === fruit) {
        score += 1;
      }
  
      if (cocktail.mood === mood) {
        score += 1;
      }
  
      if (cocktail.astrologicalSign === astrologicalSign) {
        score += 1;
      }
  
      if (score > maxScore) {
        maxScore = score;
        recommendedCocktail = cocktail;
      }
    });
  
    return recommendedCocktail;
  };
  
