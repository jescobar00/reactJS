import { useState } from "react";
import Boton from "./components/Boton";
import RutaPrivada from "./components/RutaPrivada";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );
  return (
    <>
      <Router>
        <Navbar />
        <Boton text="Home" color="blue" link="/" />
        <Boton text="Ver Productos" color="green" link="/products" />
        <Routes>
          {
            <Route
              path="/products/:id"
              element={
                //  <RutaPrivada isAuthenticated={isAuthenticated}>
                <ProductDetail />
                //</RutaPrivada>
              }
            />
          }
          <Route path="/products" element={<ProductList />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
