import React from "react";
import {
  Container,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Row,
} from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tu-mascota</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Anuncios</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header>
                <Row>
                  <FontAwesomeIcon icon={faUserAstronaut} />
                </Row>
                <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
