import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/productos">Productos</Link>
        </li>

        <li>
          <Link to="/carrito">Carrito ({getTotalItems()})</Link>
        </li>
      </ul>
    </nav>
  );
};
