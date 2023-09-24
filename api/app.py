from flask import Flask, request, jsonify, session
import mysql.connector
from flask_cors import CORS
from flask_redis import FlaskRedis
import secrets

app = Flask(__name__)

# Générer une clé secrète aléatoire à chaque démarrage de l'application
app.secret_key = secrets.token_hex(16)  # Vous pouvez ajuster la longueur de la clé si nécessaire

# Configuration de la base de données
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '280499'
app.config['MYSQL_DB'] = 'younes'

# Configuration de Flask-Redis pour le stockage de session
app.config['REDIS_URL'] = 'redis://localhost:6379/0'  # Remplacez l'URL par celle de votre serveur Redis

redis_store = FlaskRedis(app)

db = mysql.connector.connect(
    host=app.config['MYSQL_HOST'],
    user=app.config['MYSQL_USER'],
    password=app.config['MYSQL_PASSWORD'],
    database=app.config['MYSQL_DB']
)

CORS(app)

def get_user_by_email(email):
    cursor = db.cursor(dictionary=True)
    user = None  # Initialisation de la variable user

    try:
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()  # Récupération des données
    except mysql.connector.Error as e:
        # Gérez les exceptions appropriées ici, par exemple en journalisant l'erreur
        pass
    finally:
        cursor.fetchall()  # Consommez les résultats de la requête SELECT
        cursor.close()  # Fermez le curseur ici après avoir utilisé les résultats

    return user

@app.route('/inscription', methods=['POST'])
def inscription():
    if request.method == 'POST':
        nom = request.json.get('nom')
        email = request.json.get('email')
        mot_de_passe = request.json.get('motDePasse')

        cursor = db.cursor()
        try:
            cursor.execute("INSERT INTO users (nom, email, mot_de_passe) VALUES (%s, %s, %s)",
                           (nom, email, mot_de_passe))
            db.commit()
            return jsonify({'message': 'Inscription réussie !'})
        except mysql.connector.IntegrityError as e:
            # Gérer les erreurs d'intégrité, par exemple si l'email existe déjà
            db.rollback()
            return jsonify({'message': 'L\'adresse email est déjà utilisée. Veuillez en choisir une autre.'}), 400
        except mysql.connector.Error as e:
            # Gérez d'autres erreurs MySQL si nécessaire
            db.rollback()
            return jsonify({'message': 'Erreur lors de l\'inscription.'}), 500
        finally:
            cursor.close()

@app.route('/connexion', methods=['POST'])
def connexion():
    if request.method == 'POST':
        email = request.json.get('email')
        mot_de_passe = request.json.get('motDePasse')

        # Récupérer l'utilisateur à partir de la base de données par email
        user = get_user_by_email(email)

        if user is not None and user['mot_de_passe'] == mot_de_passe:
            # L'utilisateur est authentifié, enregistrez son ID dans la session
            session['user_id'] = user['id']

            # Vous pouvez rediriger ou effectuer d'autres actions
            return jsonify({'message': 'Connecté avec succès !'})
        else:
            # L'authentification a échoué, renvoyez un message d'erreur
            return jsonify({'error': 'Échec de la connexion. Veuillez réessayer avec des informations d\'identification valides.'}), 401

if __name__ == '__main__':
    app.run(debug=True)
