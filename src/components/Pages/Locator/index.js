//importing necessary modules for the application
import React, { useState } from "react";
import "./style.css";
import axios from "axios";

//defining the function which will return JSX
function Locator() {

    //creating two state variables to store location and bars
    const [location, setLocation] = useState("");
    const [bars, setBars] = useState([]);

    //async function to search the bars in the provided location
    const searchBars = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3001/search?location=${location}`
            );

            //updating the bars' list with the response received
            setBars(response.data.results);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    //returning JSX
    return (
        <div className="container">
            <h1 className="text-center">Cocktail Bar Locator</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your location"
                    value={location}

                    onChange={(e) => setLocation(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={searchBars}>
                        Search
                    </button>
                </div>
            </div>
            {/*mapping the bars array to create card for each bar info*/}
            <div className="row">
                {bars.map((bar) => (
                    <div className="col-md-4" key={bar.place_id}>
                        <div className="card mb-4">
                            <img
                                className="card-img-top"
                                src={
                                    bar.photos
                                        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${bar.photos[0].photo_reference}&key=API_KEY`
                                        : "https://via.placeholder.com/150"
                                }
                                alt={bar.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{bar.name}</h5>
                                <p className="card-text">{bar.formatted_address}</p>
                                {/*checking if opening hours data is available or not*/}
                                <p className="card-text">
                                    {bar.opening_hours
                                        ? bar.opening_hours.open_now
                                            ? "Open"
                                            : "Closed"
                                        : "Opening hours not available"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Locator;
