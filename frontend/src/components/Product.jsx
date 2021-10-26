import { useHistory } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { AddShoppingCartOutlined } from "@material-ui/icons";

const Product = ({ product }) => {
  const history = useHistory();

  const handleAddToCart = () => {
    history.push(`/cart/${product._id}?qty=1`);
  };
  return (
    <Card className="my-2 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="p-2"
        />
      </Link>

      <Card.Body className="p-2">
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Title as="span">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "white", border: "none" }}>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="div" style={{ textAlign: "center" }}>
          {product.countInStock > 0 ? (
            <strong style={{ color: "var(--bs-green)" }}>
              {product.countInStock} Items In Stock{" "}
            </strong>
          ) : (
            <strong style={{ color: "var(--bs-red)" }}>Out Of Stock</strong>
          )}
        </Card.Text>
      </Card.Footer>
      <Card.Footer
        as="h3"
        style={{ backgroundColor: "white", border: "none", marginBottom: "0" }}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "40px",
          }}
        >
          <Col xs={9}>${product.price}</Col>
          {product.countInStock > 0 && (
            <Col xs={3} style={{ textAlign: "center" }}>
              <AddShoppingCartOutlined
                style={{
                  width: "40px",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: "var(--bs-gray-100)",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={handleAddToCart}
              />
            </Col>
          )}
        </Row>
      </Card.Footer>
    </Card>

    // </Card>
  );
};

export default Product;
