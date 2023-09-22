from flask import Flask, request, jsonify, redirect, url_for
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)

# Configuration de la base de données
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '280499'
app.config['MYSQL_DB'] = 'younes'

db = mysql.connector.connect(
    host=app.config['MYSQL_HOST'],
    user=app.config['MYSQL_USER'],
    password=app.config['MYSQL_PASSWORD'],
    database=app.config['MYSQL_DB']
)

CORS(app)

@app.route('/inscription', methods=['POST'])
def inscription():
    if request.method == 'POST':
        nom = request.json.get('nom')
        email = request.json.get('email')
        mot_de_passe = request.json.get('motDePasse')

        cursor = db.cursor()
        try:
            cursor.execute("INSERT INTO users (nom, email, mot_de_passe) VALUES (%s, , %s, %s)",
                           (nom,  email, mot_de_passe))
            db.commit()
            cursor.close()
            return jsonify({'message': 'Inscription réussie !'})
        except mysql.connector.IntegrityError as e:
            # Gérer les erreurs d'intégrité, par exemple si l'email existe déjà
            db.rollback()
            cursor.close()
            return jsonify({'message': 'L\'adresse email est déjà utilisée. Veuillez en choisir une autre.'}), 400

@app.route('/inscription_reussie')
def inscription_reussie():
    return "Inscription réussie !"

if __name__ == '__main__':
    app.run(debug=True)
