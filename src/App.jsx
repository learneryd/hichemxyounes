import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Composants
import Header from "./composants/Header";
import Navigation from "./composants/Navigation";
import Footer from "./composants/Footer";

// Pages
import Home from "./page/Home";
import Inscription from "./page/Inscription";
import Connexion from "./page/Connexion";

function App() {
    const [estConnecte, setEstConnecte] = useState(false); // État initial : non connecté

    // Fonction pour définir l'état de connexion
    const definirEstConnecte = (etat) => {
        setEstConnecte(etat);
    };

    return (
        <BrowserRouter>
            <Header />
            <Navigation estConnecte={estConnecte} /> {/* Passez l'état de connexion en tant que prop */}
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route
                    path="/connexion"
                    element={<Connexion definirEstConnecte={definirEstConnecte} />}
                />
                
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
