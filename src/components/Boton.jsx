import { useNavigate } from "react-router-dom";

function Boton({ text, color, link }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Boton;
