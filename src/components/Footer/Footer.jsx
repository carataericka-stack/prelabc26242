import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Veterinaria PetCare</h3>
        <p>Cuidamos a tus mascotas con amor y dedicación.</p>
      </div>

      <nav>
        <ul className="nav-list">
          <li>Whatsapp</li>
          <li>Instagram</li>
        </ul>
      </nav>

      <div className="footer-team">
        <div className="footer-card">
          <h4>Ericka</h4>
          <p>Atención al cliente</p>
        </div>

        <div className="footer-card">
          <h4>María</h4>
          <p>Veterinaria</p>
        </div>

        <div className="footer-card">
          <h4>Juan</h4>
          <p>Ventas</p>
        </div>
      </div>
    </footer>
  );
};
