// Importing React, CSS and Bootstrap components along with the cocktails data from a JSON file.
import React from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import cocktailsData from "./cocktails.json";

function Directory() {
  return (
    // Using BS grid layout to create a container and rows for the cards that display each cocktail.
    <Container className="mt-4">
      <Row>

        {/* Mapping through the 'cocktails' array in the JSON file, creating different cards for each cocktail. */}
        {cocktailsData.cocktails.map((cocktail, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                {/* Inserting the name and description of the cocktail into the card. */}
                <Card.Title>{cocktail.name}</Card.Title>
                <Card.Text>{cocktail.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {/* Listing the ingredients required for making the cocktail */}
                <ul>
                  {cocktail.ingredients.map((ingredient, i) => (
                    <li key={i}>
                      {/* Displaying information about each individual ingredient*/}
                      {ingredient.quantity} {ingredient.unit} {ingredient.name}
                      {ingredient.extra && ` (${ingredient.extra})`}
                    </li>
                  ))}
                </ul>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Directory;
