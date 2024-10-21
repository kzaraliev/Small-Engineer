import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Path from "../../utils/paths.js";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      className="bg-body-tertiary"
      expand="lg"
      expanded={expanded}
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand as={Link} to={Path.Home}>
          Малък инженер
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={Path.Home} onClick={handleNavItemClick}>
              Начало
            </Nav.Link>
            <Nav.Link as={Link} to={Path.Products} onClick={handleNavItemClick}>
              Продукти
            </Nav.Link>
            <Nav.Link as={Link} to={Path.About} onClick={handleNavItemClick}>
              За нас
            </Nav.Link>
            <Nav.Link as={Link} to={Path.Contacts} onClick={handleNavItemClick}>
              Контакти
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to={Path.ShoppingCart}
              onClick={handleNavItemClick}
            >
              Количка
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
