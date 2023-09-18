import React from 'react';

function Header() {
  return (
  
    <header>
      
      <h1>Mon Header</h1>
      <li><a href="/">Accueil</a></li>
          <li><a href="/produits">Produits</a></li>
          <li><a href="/contact">Contact</a></li>

      <div className="user-info">
        <img src="/photo-utilisateur.jpg" alt="Photo de profil de l'utilisateur" />
        <span>Nom de l'utilisateur</span>
        <button>Se déconnecter</button>
      </div>
    </header>
  );
}

export default Header;