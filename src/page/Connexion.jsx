import React, { useState } from 'react';
import axios from 'axios';

function Connexion() {
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Ajoutez un état pour le message d'erreur

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/connexion', {
                email,
                motDePasse,
            });

            console.log(response.data); // Afficher la réponse du serveur

            // Rediriger vers la page d'accueil ou une autre page après la connexion réussie
            // Vous pouvez utiliser react-router-dom pour gérer la navigation ici
        } catch (error) {
            console.error(error);

            if (error.response.status === 401) {
                setErrorMessage('Mot de passe incorrect. Veuillez réessayer.'); // Afficher le message d'erreur
            } else {
                setErrorMessage('Une erreur s\'est produite lors de la connexion.');
            }
        }
    };

    return (
        <div className="connexion">
            <div className="connexion-content">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Se connecter</button>
                    {errorMessage && <p>{errorMessage}</p>} {/* Affichez le message d'erreur s'il existe */}
                </form>
            </div>
        </div>
    );
}

export default Connexion;
