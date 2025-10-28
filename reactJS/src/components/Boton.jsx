//import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

function Boton({ text, color }) {

  return <button style={{ backgroundColor: color }}>{text}</button>;
}

export default Boton;
