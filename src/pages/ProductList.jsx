import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Boton from "../components/Boton";
import consts from "../consts";

export default function ProductList() {
  const [listOfResults, setListOfResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(consts().API_BREEDS_URL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setListOfResults(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There's an error: {error}</p>;

  return (
    <div>
      <h1>Cat Breeds List</h1>
      <ul>
        {listOfResults.map(item => (
          <li key={item.id}>
            🐱 {item.name} 🌎: {item.origin}
            <img
              src={consts().API_IMAGES_URL.replace(
                consts().API_IMAGES_PLACEHOLDER,
                item.reference_image_id
              )}
              alt={item.name}
              width="80"
            />
            <Boton
              text="Ver Detalle"
              color="blue"
              link={"/products/" + item.id}
            />
            <br />
          </li>
        ))}
        <br />
      </ul>
    </div>
  );
}
