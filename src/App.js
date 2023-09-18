import React from 'react';
import Header from './composants/Header'; // Assurez-vous que le chemin est correct
import Footer from './composants/footer'; // Assurez-vous que le chemin est correct
import './App.css'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        {/* Contenu de votre application */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
