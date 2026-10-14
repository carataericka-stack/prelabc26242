import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src="/img/petware/logo-veterinaria.jpg" alt="logo veterinaria" />
          <span>Veterinaria PetCare</span>
        </Link>
      </div>

      <Nav />
    </header>
  );
};
