import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { DeleteOutline } from "@material-ui/icons";

const CartScreen = ({ match, history, location }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  useEffect(() => {
    if (order) {
      history.push(`/order/${order._id}`);
    }
  }, [order, history]);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <>
      <Row className="pt-3">
        {" "}
        <h1> Shopping Cart </h1>
      </Row>

      <Row>
        <Col md={4} className="mb-1">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                  items
                </h2>{" "}
                <strong>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  style={{ width: "100%" }}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product} className="mb-1">
                  <Row style={{ alignItems: "center" }}>
                    <Col md={2}>
                      {/* style={{ marginBottom: "15px" }}> */}
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={4} style={{ marginBottom: "5px" }}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={6}>
                      {/* style={{ marginBottom: "15px" }}> */}
                      <Row style={{ alignItems: "center" }}>
                        <Col xs={4} style={{ textAlign: "center" }}>
                          ${item.price}
                        </Col>
                        <Col xs={4} style={{ textAlign: "center" }}>
                          <Form.Control
                            style={{ textAlign: "center" }}
                            as="select"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(addToCart(item.product, e.target.value))
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                        <Col xs={4} style={{ textAlign: "center" }}>
                          <DeleteOutline
                            onClick={() => removeFromCartHandler(item.product)}
                            style={{ cursor: "pointer" }}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
