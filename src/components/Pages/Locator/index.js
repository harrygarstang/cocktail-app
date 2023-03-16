import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function Locator() {
    const [location, setLocation] = useState("");
    const [bars, setBars] = useState([]);

    const searchBars = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/search?location=${location}`
          );
    
          setBars(response.data.results);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

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
            <div className="row">
                {bars.map((bar) => (
                    <div className="col-md-4" key={bar.place_id}>
                        <div className="card mb-4">
                            <img
                                className="card-img-top"
                                src={bar.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${bar.photos[0].photo_reference}&key=AIzaSyCa2m3m5AbvBI8j9bo-cGET8hypX3sSpWY` : "https://via.placeholder.com/150"}
                                alt={bar.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{bar.name}</h5>
                                <p className="card-text">{bar.formatted_address}</p>
                                <p className="card-text">{bar.opening_hours ? (bar.opening_hours.open_now ? "Open" : "Closed") : "Opening hours not available"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Locator;
