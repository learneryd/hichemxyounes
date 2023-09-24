import React from 'react';
function Navigation() {
  return (
    <nav>
      <ul> {/* Liste de navigation */}
        <li><a href="/">Accueil</a></li>
        <li><a href="/produits">Produits</a></li>
        <li><a href="/contact">Contact</a></li>
        <li> <button> <a href="/page/inscription">S'inscrire</a> </button> </li>
        <li><button> Se connecter </button></li>
      </ul>

      
      
    </nav>
  );
}

export default Navigation;