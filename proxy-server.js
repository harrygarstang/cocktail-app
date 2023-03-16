// Require the necessary dependencies
const express = require("express"); 
const cors = require("cors"); 
const axios = require("axios"); 

// Create a new instance of the Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Define a route for handling GET requests to '/search'
app.get("/search", async (req, res) => {
  try {
    // Send a GET request to the Google Places API using the axios library
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cocktail+bars+in+${req.query.location}&key=YOUR_API_KEY_HERE`
    );

    // If  request is successful, send response data as JSON object
    res.json(response.data);
  } catch (error) {
    // If error, send 500 status code with an JSON format error message
    res.status(500).json({ message: "An error occurred" });
  }
});

// Start the server and listen for incoming requests on port 3001
app.listen(3001, () => {
  console.log("Proxy server is running on port 3001");
});
