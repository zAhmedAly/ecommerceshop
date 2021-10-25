import { useHistory } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  const history = useHistory();

  const handleAddToCart = () => {
    history.push(`/cart/${product._id}?qty=1`);
  };
  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Title as="h5">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="span">
          <Row style={{ alignItems: "center" }}>
            <Col xs={9}>
              {product.countInStock > 0
                ? `${product.countInStock} Items In Stock`
                : "Out Of Stock"}
            </Col>
            {product.countInStock > 0 && (
              <Col xs={3} style={{ alignItems: "center" }}>
                <Button type="button" variant="light" onClick={handleAddToCart}>
                  {" "}
                  {/* Add */}
                  <i className="fa-solid fa-cart-plus"></i>
                </Button>{" "}
              </Col>
            )}
          </Row>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
