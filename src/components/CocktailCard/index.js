import { Card } from "react-bootstrap";
import React from 'react';
import { images } from "../Pages/Directory";
import "./style.css";


// If the `cocktail` object is falsy, return `null` to indicate that no component should be rendered.
// This stops the user from being able to make a cocktail appear when they havent answered all of our questions 
const CocktailCard = ({ cocktail }) => {
  if (!cocktail) {
    return null;
  }
// rendering taken from the Directory rendering 
  return (
    <Card className="cocktail-card">
      <Card.Img src={images[cocktail.image]} />
      <Card.ImgOverlay>
        <Card.Title className="cocktailTitle">{cocktail.name}</Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Text>{cocktail.description}</Card.Text>
        <Card.Text className="mb-0">
          <strong>Ingredients:</strong>
        </Card.Text>
        <div
          className="ingredients-scrollbar"
          style={{
            maxHeight: "100px",
            overflowY: "scroll",
            paddingRight: "5px",
          }}
        >
          {cocktail.ingredients.map((ingredient, index) => (
            <Card.Text key={index}>
              {ingredient.quantity} {ingredient.unit} {ingredient.name}
            </Card.Text>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CocktailCard;