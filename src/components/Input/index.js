import React, { useState } from "react";
import { recommendCocktail } from "../Pages/Directory/cocktailReccomender";

const Input = () => {

    // using state hook to set initial values for the variables fruit, mood and astrological sign as an empty "" string.
    const [fruit, setFruit] = useState("");
    const [mood, setMood] = useState("");
    const [astrologicalSign, setAstrologicalSign] = useState("");

    // handling the submit through a function calling recommendCocktail function and consoles.log the returned value.
    // need to figure out how to make it draw the bootstrap card rather than the console.log for the final product 
    const handleSubmit = () => {
        const recommendedCocktail = recommendCocktail(fruit, mood, astrologicalSign);
        console.log(recommendedCocktail);
    };


    return (
        <div>
            {/* Contains the three questions of fruit, mood, and star sign */}
            {/* whenever the select element changes, 'dropdownEvent' is triggered, so setFruit is invoked as a callback function whenenever the select item changes */}
            {/* The state of the fruit variable is being changed with the setFruit function  */}

            <select value={fruit} onChange={(dropdownEvent) => setFruit(dropdownEvent.target.value)}>
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
            {/* This is happening in the same way for every question using React State   */}
            <select value={mood} onChange={(dropdownEvent) => setMood(dropdownEvent.target.value)}>
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
                onChange={(dropdownEvent) => setAstrologicalSign(dropdownEvent.target.value)}
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
