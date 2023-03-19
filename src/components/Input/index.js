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
                <option value="">Select "fruit"</option>
                <option value="lime">Lime</option>
                <option value="cranberry">Cranberry</option>
                <option value="orange">Orange</option>
                <option value="pineapple">Pineapple</option>
                <option value="peach">Peach</option>
                <option value="strawberry">Strawberry</option>
                <option value="mint">Mint</option>
                <option value="lemon">Lemon</option>
            </select>
            <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">Select mood</option>
                <option value="happy">Happy</option>
                <option value="sophisticated">Sophisticated</option>
                <option value="nostalgic">Nostalgic</option>
                <option value="excited">Excited</option>
                <option value="angry">Fierce</option>
                <option value="energetic">Energetic</option>
                <option value="warm">Warm</option>
                <option value="bold">Bold</option>
                <option value="carefree">Care free</option>
                <option value="introspective">Introspective</option>
                <option value="tired">Tired</option>
            </select>
            <select
                value={astrologicalSign}
                onChange={(e) => setAstrologicalSign(e.target.value)}
            >
                <option value="">Select astrological sign</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Gemini">Gemini</option>
                <option value="Leo">Leo</option>
                <option value="Taurus">Taurus</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Aries">Aries</option>
                <option value="Cancer">Cancer</option>
                <option value="Pisces">Pisces</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Capricorn">Capricorn</option>
            </select>
            <button onClick={handleSubmit}>Find Cocktail</button>
        </div>
    );
};

export default Input;
