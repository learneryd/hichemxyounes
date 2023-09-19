// composants/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.instagram.com/hichem.ibm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nom de l'entreprise. Tous droits réservés.</p>
        <a href="https://www.instagram.com/hichem.ibm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </footer>
  );
}

export default Footer;
