import React from 'react';

function Connexion(){
    return(
        <div className="connexion">
            <div className="connexion-content">
                <h2>Connexion</h2>
                <form>
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
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    )
}
export default Connexion;