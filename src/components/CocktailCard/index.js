import React from "react";
import Input from "../Input";
import cocktailsData from "./cocktails.json";
import { Container, Row, Col, Card } from "react-bootstrap";

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

function CocktailCard () {
   return (
      <Container className="mt-4">
        <Row>
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
    );
    
}

   return (
    <div>
        <Input fruitChoice/>
      </div>
   )
}

export default CocktailCard ;