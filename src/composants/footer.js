// composants/Footer.js
import React from 'react';

function Footer() {
    return (
    <footer>
 <div className="footer-content">
        <div className="footer-logo">
          <img src="/votre-logo.png" alt="Logo de l'entreprise" />
          <h2>Nom de l'entreprise</h2>
        </div>
        <div className="footer-contact">
          <p>Adresse : 123 Rue de l'Entreprise</p>
          <p>Téléphone : (123) 456-7890</p>
          <p>Email : contact@entreprise.com</p>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nom de l'entreprise. Tous droits réservés.</p>
      </div>

    </footer>
    );
}

export default Footer;