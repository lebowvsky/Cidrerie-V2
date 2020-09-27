import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/Logo_pomme_blanc_fond_transparent.png";

const HeaderMenu = () => {
  const [hamburgerClass, setHamburgerClass] = useState(false);

  const handleHamburger = () => {
    setHamburgerClass(!hamburgerClass);
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="h-logo-wrapper">
          <img
            src={Logo}
            alt="Logo les verger de la ferme"
            className="hlw-image"
          />
          <h1 className="hlw-text">
            <span className="hlwt-high">Les vergers</span>
            <span className="hlwt-middle">
              de
              <br />
              la
            </span>
            <span className="hlwt-low">Ferme</span>
          </h1>
        </div>
      </Link>

      <ul className="h-menu">
        <Link to="/">
          <li className="hm-item">Accueil</li>
        </Link>
        <Link to="/our-products">
          <li className="hm-item">Nos Produits</li>
        </Link>
        <Link to="/contact">
          <li className="hm-item">Contact</li>
        </Link>
      </ul>

      <div
        className={hamburgerClass ? "h-hamburger cross" : "h-hamburger"}
        onClick={handleHamburger}
      >
        <span className="hh-line"></span>
      </div>
    </header>
  );
};

export default HeaderMenu;
