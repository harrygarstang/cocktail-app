import { Card } from "react-bootstrap";

const CocktailCard = ({ cocktail }) => {
  if (!cocktail) {
    return null;
  }

  return (
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