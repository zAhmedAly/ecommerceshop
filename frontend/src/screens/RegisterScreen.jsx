import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

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
    if (!name || !email || !password) {
      setMessage("All fields are required");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      {!userInfo && (
        <FormContainer>
          <h1>Register User</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>User Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                name={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email" className="py-3">
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
              Register
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              Already Registered?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Log In
              </Link>
            </Col>
          </Row>
          {message && <Message varient="warning">{message}</Message>}
          {error && <Message varient="danger">{error}</Message>}
          {loading && <Loader />}
        </FormContainer>
      )}
    </>
  );
};

export default RegisterScreen;
