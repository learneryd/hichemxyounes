import React , {useState} from "react";
import axios from "axios";


function Inscription() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/inscription", {
                nom,
                email,
                motDePasse,
            });

            console.log(response.data); // Afficher la réponse du serveur
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="inscription">
            <div className="inscription-content">
                <h2>Inscription</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nom">nom :</label>
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
