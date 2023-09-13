import React from "react";
import "./fixedHeader.css";

const FixedHeader: React.FC = () => {
  return (
    <header className="fixed-header">
      <div className="logo">
        <img src="./imagenes/logo.jpg" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default FixedHeader;
