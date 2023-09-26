import React, { useState } from "react";
import axios from "axios";

function Inscription() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/inscription", {
                nom,
                email,
                motDePasse,
            });

            console.log(response.data); // Afficher la réponse du serveur
            
            setNom("");
            setEmail("");
            setMotDePasse("");

            // Rediriger vers une page de confirmation après inscription réussie si nécessaire
            // Vous pouvez utiliser react-router-dom pour gérer la navigation ici
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="inscription">
            <div className="inscription-content">
                <h2>Inscription</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Nom :</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="motDePasse">Mot de passe :</label>
                        <input
                            type="password"
                            id="motDePasse"
                            name="motDePasse"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                        />
                    </div>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </div>
    );
}

export default Inscription;
