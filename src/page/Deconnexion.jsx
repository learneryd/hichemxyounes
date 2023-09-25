import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Deconnexion({ definirEstConnecte }) {
    const navigate = useNavigate();

    const handleDeconnexion = async () => {
        try {
            // Effectuez les opérations de déconnexion côté serveur (par exemple, supprimez le cookie d'authentification)
            const response = await axios.get('http://localhost:5000/deconnexion');

            if (response.status === 200) {
                // La déconnexion a réussi, redirigez l'utilisateur vers la page d'accueil
                navigate('/');
                // Définissez l'état de connexion sur true (utilisateur connecté)
                definirEstConnecte(false);
            } else {
                // Gérez les erreurs de déconnexion ici
            }
        } catch (error) {
            // Gérez les erreurs de déconnexion ici
        }
    };

    return (
        <div>
            <h2>Se déconnecter</h2>
            <button onClick={handleDeconnexion}>Déconnexion</button>
        </div>
    );
}


    return (
        <div>
            <h2>Se déconnecter</h2>
            <button onClick={handleDeconnexion}>Déconnexion</button>
        </div>
    );
}

export default Deconnexion;
