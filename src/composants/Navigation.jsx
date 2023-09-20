import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/produits">Produits</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/inscription" className="button-link">S'inscrire</Link></li>
        <li><button>Se connecter</button></li>
      </ul>
    </nav>
  );
}

export default Navigation;
