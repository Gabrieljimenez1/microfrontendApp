import React from "react";
import "./fixedHeader.css";
import logo from "./imagenes/logo.png";

const FixedHeader: React.FC = () => {
  return (
    <header className="fixed-header">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/productos">Edades</a>
          </li>
          <li>
            <a href="/contacto">Lista Nombres</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default FixedHeader;
