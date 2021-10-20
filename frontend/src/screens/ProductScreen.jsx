import { useState, useEffect } from "react";

import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
// import products from "../products";

import axios from "axios";

const ProductScreen = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/products/${match.params.id}`);
      setProduct(data);
    };
    getProduct();
  }, [match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        {" "}
        Go Back
      </Link>
      {product && (
        <Row>
          <Col md={4}>
            <Image src={product.image} alt={product.name} fluid rounded />
          </Col>
          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Brand</Col>
                  <Col>{product.brand}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Category</Col>
                  <Col>{product.category}</Col>
                </Row>
              </ListGroup.Item>

              {/* <ListGroup.Item>
              <Row>
                <Col>Brand</Col>
                <Col>Category</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>{product.brand}</Col>
                <Col>{product.category}</Col>
              </Row>
            </ListGroup.Item> */}

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    style={{ width: "100%" }}
                    className="btn btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
