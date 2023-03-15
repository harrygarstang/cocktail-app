import React from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import cocktailsData from "./cocktails.json";

function Directory() {
  return (
    <Container className="mt-4">
      <Row>
        {cocktailsData.cocktails.map((cocktail, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{cocktail.name}</Card.Title>
                <Card.Text>{cocktail.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <ul>
                  {cocktail.ingredients.map((ingredient, i) => (
                    <li key={i}>
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
