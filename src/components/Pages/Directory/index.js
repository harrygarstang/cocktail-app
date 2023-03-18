import React from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import cocktailsData from "./cocktails.json";
import mojitoImg from "./images/mojito.jpg";
import cosmopolitanImg from "./images/cosmopolitan.jpg";
import oldFashionedImg from "./images/old-fashioned.jpg";
import pinaColadaImg from "./images/pina-colada.jpg";
import wooWooImg from "./images/woowoo.jpg";
import lavaFlowImg from "./images/lava-flow.jpg";
import daiquiriImg from "./images/daiquiri.jpg"
import espressoImg from "./images/espresso.jpg"
import mintjulepImg from "./images/mint-julep.jpg"
import negroniImg from "./images/negroni.jpg"
import tequilaImg from "./images/tequila-sunrise.jpg"
import whiskeyImg from "./images/whiskey-sour.jpg"
// Creating an array of the images as a workaround so we can retain the JSON file rather than using require() 
const images = {
  "mojito.jpg": mojitoImg,
  "cosmopolitan.jpg": cosmopolitanImg,
  "old-fashioned.jpg": oldFashionedImg,
  "pina-colada.jpg": pinaColadaImg,
  "woowoo.jpg": wooWooImg,
  "lava-flow.jpg": lavaFlowImg,
  "daiquiri.jpg": daiquiriImg,
  "espresso.jpg": espressoImg,
  "mint-julep.jpg": mintjulepImg,
  "negroni.jpg": negroniImg,
  "tequila-sunrise.jpg": tequilaImg,
  "whiskey-sour.jpg": whiskeyImg,
};

function Directory() {
  return (
    <Container className="mt-4">
      <Row>
        {cocktailsData.cocktails.map((cocktail, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img src={images[cocktail.image]} />
              <Card.ImgOverlay>
                <Card.Title>{cocktail.name}</Card.Title>
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
                  {cocktail.ingredients.map((ingredient, idx) => (
                    <Card.Text key={idx}>
                      {ingredient.quantity} {ingredient.unit}{" "}
                      {ingredient.name}
                    </Card.Text>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default Directory;
