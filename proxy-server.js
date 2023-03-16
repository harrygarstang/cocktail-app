const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/search", async (req, res) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cocktail+bars+in+${req.query.location}&key=AIzaSyCa2m3m5AbvBI8j9bo-cGET8hypX3sSpWY`
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "An error occurred" });
    }
});

app.listen(3001, () => {
    console.log("Proxy server is running on port 3001");
});
