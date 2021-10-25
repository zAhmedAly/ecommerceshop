import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="py-1" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <i className="fa-solid fa-bag-shopping"></i> eCommerce Shop
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/cart">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              {" "}
              <i className="fa-solid fa-user"></i> Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
