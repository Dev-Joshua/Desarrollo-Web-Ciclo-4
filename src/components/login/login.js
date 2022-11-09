import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }
  //Creo un metodo para generar iniciar sesion
  iniciarSesion() {
    alert("Boton de Iniciar Sesión");
  }

  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="label">Email</Form.Label>
                  <Form.Control
                    //Proceso para capturar el dato(usuario)
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                    placeholder="User"
                  />
                  {/* {this.state.usuario} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                  {/* {this.state.pass} */}
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  //Cuando le de click haga algo con ese evento
                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
