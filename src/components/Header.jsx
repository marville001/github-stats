import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Github Stats</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">User Stats</Nav.Link>
          <Nav.Link href="/contributions">Contributions</Nav.Link>
          <Nav.Link href="/commits">Commits</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
