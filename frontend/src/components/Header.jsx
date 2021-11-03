import { useDispatch, useSelector } from "react-redux";
import {
  PersonRounded,
  ShoppingCartRounded,
  Settings,
} from "@material-ui/icons";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="py-1" fixed="top">
        <Container>
          <LinkContainer
            to="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Navbar.Brand style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fa-solid fa-bag-shopping"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              <span>eCommerce Shop</span>
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="ml-auto">
            <LinkContainer
              to="/cart"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Nav.Link style={{ display: "flex", alignItems: "center" }}>
                <ShoppingCartRounded /> <span> Cart </span>
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <>
                <LinkContainer
                  to="/profile"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Nav.Link style={{ display: "flex", alignItems: "center" }}>
                    <Settings /> <span>{userInfo.name} </span>
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </>
            ) : (
              <LinkContainer
                to="/login"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Nav.Link style={{ display: "flex", alignItems: "center" }}>
                  <PersonRounded />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
