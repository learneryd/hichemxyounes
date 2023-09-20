import React from 'react';
import Header from './composants/Header';
import Footer from './composants/footer';
import Navigation from './composants/Nav';
import Section from './composants/section';
import './App.css';

function App() {
  return(
    <div>
      <Header />
      <Navigation /> {/* Utilisez le composant Navigation ici */}
      <Section /> {/* Utilisez le composant Section ici */}
      <div className="content">
        {/* Contenu de votre application */}
      </div>
      <Footer />
    </div>
  );
}


export default App;
