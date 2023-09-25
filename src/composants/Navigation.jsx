import React from "react";
import { Link } from "react-router-dom";

function Navigation({ estConnecte, definirEstConnecte }) {
    const deconnexion = () => {
        // Appeler la fonction pour déconnecter l'utilisateur
        definirEstConnecte(false);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/produits">Produits</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {estConnecte ? (
                    <li>
                        <Link to="/mesdonnees" className="button-link">
                            Mes données
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/inscription" className="button-link">
                            S'inscrire
                        </Link>
                    </li>
                )}
                <li>
                    {estConnecte ? (
                        <Link to="/deconnexion" className="button-link" onClick={deconnexion}>
                            Se déconnecter
                        </Link>
                    ) : (
                        <Link to="/connexion">Se connecter</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}


export default Navigation;
