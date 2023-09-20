import React from 'react';
import Header from './composants/Header'; // Assurez-vous que le chemin est correct
import Footer from './composants/footer'; // Assurez-vous que le chemin est correct
import Navigation from './composants/nav';
import Section from './composants/section';
import './App.css'; // Assurez-vous que le chemin est correct

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
