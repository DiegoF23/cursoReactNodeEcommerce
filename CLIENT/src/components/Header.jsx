import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand">Mi Tienda</Link>
        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/contacto">CONTACTO</Link></li>
            <li><Link to="/About">SOBRE MI</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
