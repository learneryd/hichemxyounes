import React from 'react';
import Footer from '../composants/footer';
import Header from '../composants/Header';
import Navigation from '../composants/Nav';

function Inscription() {
  return (
    <div className="inscription">
      <Header />
      <Navigation />
      <div className="inscription-content">
        <h2>Inscription</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" name="nom" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="motDePasse">Mot de passe :</label>
            <input type="password" id="motDePasse" name="motDePasse" />
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Inscription;