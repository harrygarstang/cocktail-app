import React, { useState } from "react";
import { recommendCocktail } from "../Pages/Directory/cocktailReccomender";

const Input = () => {
  const [fruit, setFruit] = useState("");
  const [mood, setMood] = useState("");
  const [astrologicalSign, setAstrologicalSign] = useState("");

  const handleSubmit = () => {
    const recommendedCocktail = recommendCocktail(fruit, mood, astrologicalSign);
    console.log(recommendedCocktail);
  };

  return (
    <div>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="">Select fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </select>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
      </select>
      <select
        value={astrologicalSign}
        onChange={(e) => setAstrologicalSign(e.target.value)}
      >
        <option value="">Select astrological sign</option>
        <option value="aries">Aries</option>
        <option value="taurus">Taurus</option>
      </select>
      <button onClick={handleSubmit}>Find Cocktail</button>
    </div>
  );
};

export default Input;
