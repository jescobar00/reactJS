import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import consts from "../consts";

function ProductDetail() {
  const { id } = useParams();
  const [objDetalle, setObjDetalle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const urlToFetch = consts().API_BREEDS_URL + "/" + id;
      try {
        const res = await fetch(urlToFetch);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setObjDetalle(data);
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
  if (!objDetalle) return <p>No product found</p>;

  return (
    <div>
      <h2>Detalles - ID: {id}</h2>
      <p>
        <b>Nombre:</b> {objDetalle.name}
      </p>
      <p>
        <b>Origen:</b> {objDetalle.origin}
      </p>
      <p>
        <b>Temperamento:</b> {objDetalle.temperament}
      </p>
      <p>
        <b>Descripcion:</b> {objDetalle.description}
      </p>
      <p>
        <b>Años de vida:</b> {objDetalle.life_span}
      </p>
      <img
        src={consts().API_IMAGES_URL.replace(
          consts().API_IMAGES_PLACEHOLDER,
          objDetalle.reference_image_id
        )}
        alt={objDetalle.name}
        width="500"
      />
    </div>
  );
}

export default ProductDetail;
