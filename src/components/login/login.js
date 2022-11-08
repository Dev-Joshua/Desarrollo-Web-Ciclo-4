import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
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
              type="email"
              placeholder="User"
              style={{ fontSize: "12px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ float: "left", fontWeight: "bold" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ fontSize: "12px" }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: 20, width: "100%" }}
          >
            Iniciar Sesión
          </Button>
        </Form>
      </Container>
    );
  }
}
