import React, { useState } from "react";
//import { Routes, Route, Navigate } from "react-router-dom";
import ProductoDetalle from "./pages/ProductoDetalle";
import RutaPrivada from "./components/RutaPrivada";
import Carrito from "./pages/Carrito";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Boton from "./components/Boton";

function App() {
// const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route
          path="/carrito"
          element={
            <RutaPrivada isAuthenticated={isAuthenticated}>
              <Carrito />
            </RutaPrivada>
          }
        />
        <Route
          path="/admin"
          element={
            isAuthenticated ? <Admin /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
      <br/> */}
      <Boton text={isAuthenticated ? "Logout" : "Login"} color="green"/>
    </div>
  );
}

export default App;
