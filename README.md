TerraGrow ERP
Aperçu
TerraGrow ERP est une application pour gérer des parcelles et bandes de culture. Elle permet de créer des parcelles, générer des bandes (1,2 m de large), et les visualiser via une interface SVG.

Backend : Node.js, Express, PostgreSQL
Frontend : Angular, Angular Material
Dépôt Public : Ce projet est hébergé sur GitHub en mode public.

Instructions Rapides pour Lancer le Projet
Prérequis

Node.js (v18+)
PostgreSQL (v17)
Angular CLI (npm install -g @angular/cli)

1. Cloner le Dépôt
Clonez le dépôt public :
git clone https://github.com/karimhajsaleh/terragrow.git
cd TERRAGROW

2. Configurer la Base de Données

Installez PostgreSQL : https://www.postgresql.org/download/windows/
Ajoutez C:\Program Files\PostgreSQL\17\bin au PATH.
Créez la base de données :psql -U postgres -c "CREATE DATABASE terragrowTest;"

Utilisez votre mot de passe PostgreSQL (non inclus dans ce dépôt pour des raisons de sécurité).

3. Configurer le Backend

Allez dans le dossier backend :cd backend


Installez les dépendances :npm install


Dans le dossier backend/src, créez un fichier .env et ajoutez-y vos identifiants PostgreSQL comme suit :
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=votre-mot-de-passe
DB_NAME=terragrowTest
DB_PORT=5432
PORT=3000


Démarrez le serveur :node index.js



4. Lancer le Frontend

Allez dans le dossier frontend :cd ../frontend


Installez les dépendances :npm install


Démarrez l’application :ng serve


Ouvre http://localhost:4200.

5. Tester

Crée une parcelle (ex. nom : "Parcelle 1", longueur : 50, largeur : 6).
Vérifie que 5 bandes sont créées (6 / 1.2 = 5).


