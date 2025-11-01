import { useState } from "react";
import Boton from "./components/Boton";
import RutaPrivada from "./components/RutaPrivada";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <Router>
        <Boton text="Hola Mundo" color="blue" />
        <Boton text="Ver Productos" color="green" link="/products" />
        <Routes>
          <Route
            path="/products"
            element={
              <RutaPrivada isAuthenticated={isAuthenticated}>
                <ProductList />
              </RutaPrivada>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
