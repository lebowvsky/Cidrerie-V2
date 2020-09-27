import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo_noir.png";

const HeaderMenu = () => {
  return (
    <header className="header">
      <div className="h-logo-wrapper">
        <img
          src={Logo}
          alt="Logo les verger de la ferme"
          className="hlw-image"
        />
      </div>

      <ul className="h-menu">
        <Link to='/'><li className="hm-item">Accueil</li></Link>
        <Link to='/our-products'><li className="hm-item">Nos Produits</li></Link>
        <Link to='/contact'><li className="hm-item">Contact</li></Link>
      </ul>
    </header>
  );
};

export default HeaderMenu;
