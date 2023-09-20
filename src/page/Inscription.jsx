import React from "react";

function Inscription() {
    return (
        <div className="inscription">
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
                        <input
                            type="password"
                            id="motDePasse"
                            name="motDePasse"
                        />
                    </div>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </div>
    );
}

export default Inscription;
