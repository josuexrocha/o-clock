# Comment exécuter le script SQL

- Se connecter à notre serveur Postgres via `psql`
  - `sudo -i -u postgres psql`

- Créer un utilisateur (admin) pour notre future BDD
  - `CREATE ROLE ocoffee WITH LOGIN PASSWORD 'ocoffee';`

- Créer une base de données 
  - `CREATE DATABASE ocoffee WITH OWNER ocoffee;`

- Sortir de `psql`
  - `exit`

- Se placer dans le dossier `data` avec son terminal : 
  - `cd <chemin_vers_le_dossier_data>`
  
- Exécuter le script
  - `psql -U ocoffee -d ocoffee -f ./create-database.sql`

