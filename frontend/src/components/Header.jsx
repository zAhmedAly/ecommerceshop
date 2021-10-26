import { PersonRounded, ShoppingCartRounded } from "@material-ui/icons";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  console.log(window.innerWidth);
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="py-1" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fa-solid fa-bag-shopping"
                style={{ marginRight: "3px" }}
              ></i>{" "}
              eCommerce Shop
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link style={{ display: "flex", alignItems: "center" }}>
                <ShoppingCartRounded /> <span> Cart </span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link style={{ display: "flex", alignItems: "center" }}>
                <PersonRounded />
                Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
