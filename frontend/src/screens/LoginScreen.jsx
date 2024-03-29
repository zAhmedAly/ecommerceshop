import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {!userInfo && (
        <FormContainer>
          <h1>User Log In</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                name={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className="py-3">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              varient="primary"
              disabled={loading}
              className="py-3"
              style={{ width: "100%" }}
            >
              {" "}
              Log In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
          {error && <Message varient="danger">{error}</Message>}
          {loading && <Loader />}
        </FormContainer>
      )}
    </>
  );
};

export default LoginScreen;
