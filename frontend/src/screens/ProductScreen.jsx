import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ match, history, location }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const handleAddToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        {" "}
        Go Back
      </Link>
      {loading ? (
        <div id="cover-spin"></div>
      ) : error ? (
        <Message varient="danger"> {error} </Message>
      ) : (
        <Row>
          <Col md={3} className="mb-2">
            <Image
              src={product.image}
              alt={product.name}
              rounded
              fluid
              style={{
                border: "5px solid white",
              }}
            />
          </Col>
          <Col md={5} className="mb-2">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Brand:</Col>
                  <Col>{product.brand}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Category:</Col>
                  <Col>{product.category}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                Price:{" "}
                <span style={{ fontSize: "20px", color: "var(--bs-red)" }}>
                  ${product.price}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description: </strong>
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="mb-2">
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col style={{ textAlign: "center" }}>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col style={{ textAlign: "center" }}>
                      {product.countInStock > 0
                        ? `${product.countInStock} In Stock`
                        : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row style={{ alignItems: "center" }}>
                      <Col>Quatity</Col>
                      <Col>
                        <Form.Control
                          style={{ textAlign: "center" }}
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    style={{ width: "100%" }}
                    className="btn btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={handleAddToCart}
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
