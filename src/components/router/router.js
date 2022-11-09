//Los Enrutadores hacen un proceso de direccionamiento tanto a nivel del back como del front
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route
          path="/*"
          element={
            <h1 style={{ marginTop: 300 }}>
              404 <br />
              ¡Página no encontrada!
            </h1>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2 style={{ marginTop: 300 }}>Home</h2>
    </div>
  );
}
//Con element invoco la funcion Login que importe, en el path le indico la ruta
//Router --> Direccionamiento
