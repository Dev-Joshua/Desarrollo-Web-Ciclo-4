import React from "react";
import { Container, Form, Button } from "react-bootstrap";

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
      <Container
        id="login-container"
        style={{
          marginTop: 200,
          width: "400px",
          border: "1px solid #000",
          padding: "30px",
          borderRadius: 10,
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ float: "left", fontWeight: "bold" }}>
              Email
            </Form.Label>
            <Form.Control
              //Proceso para capturar el dato(usuario)
              onChange={(e) => this.setState({ usuario: e.target.value })}
              placeholder="User"
              style={{ fontSize: "12px" }}
            />
            {/* {this.state.usuario} */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ float: "left", fontWeight: "bold" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ fontSize: "12px" }}
              onChange={(e) => this.setState({ pass: e.target.value })}
            />
            {/* {this.state.pass} */}
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            style={{ marginTop: 20, width: "100%" }}
            //Cuando le de click haga algo con ese evento
            onClick={() => {
              this.iniciarSesion();
            }}
          >
            Iniciar Sesión
          </Button>
        </Form>
      </Container>
    );
  }
}
