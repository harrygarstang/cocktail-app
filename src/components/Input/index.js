import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select"; // need to install perhaps

function Input() {
    const fruitOptions = [
        { value: "Strawberry", label: "Strawberry" },
        { value: "Pineapple", label: "Pineapple" },
        { value: "Coconut", label: "Coconut" },
    ];

    const moodOptions = [
        { value: "Excited", label: "Excited" },
        { value: "Tired", label: "Tired" },
        { value: "Meh", label: "Meh" },
    ];

    const astrologicalOptions = [
        { value: "Aries", label: "Aries" },
        { value: "Taurus", label: "Taurus" },
        { value: "Gemini", label: "Gemini" },
        { value: "Cancer", label: "Cancer" },
        { value: "Leo", label: "Leo" },
        { value: "Virgo", label: "Virgo" },
        { value: "Libra", label: "Libra" },
        { value: "Scorpius", label: "Scorpius" },
        { value: "Sagittarius", label: "Sagittarius" },
        { value: "Capricornus", label: "Capricornus" },
        { value: "Aquarius", label: "Aquarius" },
        { value: "Pisces", label: "Pisces" },
    ];

    return (
        <div
            className="container flex-container"
            style={{ width: "80%", margin: "auto" }}
        >
            <div className="flex-child-1">
                <h2>Tell us a bit about yourself</h2>
            </div>
            <div className="flex-child-2">
                <h3>What's your favourite fruit?</h3>
                <span className="span-block">
                    <Select options={fruitOptions} />
                </span>
                <h3>What's your mood today?</h3>
                <span className="span-block">
                    <Select options={moodOptions} />
                </span>
                <h3>What's your astrological sign?</h3>
                <span className="span-block">
                    <Select options={astrologicalOptions} />
                </span>
            </div>
        </div>
    );
}

export default Input;
