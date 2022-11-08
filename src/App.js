// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";

//<Login /> para llamar los componentes
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
