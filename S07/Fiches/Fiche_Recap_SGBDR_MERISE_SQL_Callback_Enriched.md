
# Fiche Récapitulative

## Introduction aux Systèmes de Gestion de Bases de Données Relationnelles (SGBDR)

- **Définition** : Un SGBDR (Système de Gestion de Bases de Données Relationnelles) est un logiciel permettant de créer, manipuler, gérer et administrer des bases de données structurées. Il garantit l'intégrité, la sécurité et la pérennité des données tout en permettant des opérations de stockage, tri, récupération, et modification des données via des tables interreliées.

- **Rôle et Avantages** :
  - **Intégrité des données** : Les SGBDR assurent que les données sont cohérentes et valides grâce à des contraintes (comme les clés primaires et étrangères).
  - **Sécurité** : Les accès aux données sont contrôlés via des systèmes d'authentification et de permissions.
  - **Requêtes complexes** : Grâce à SQL, les SGBDR permettent de faire des requêtes complexes pour interroger et manipuler les données efficacement.
  - **Normalisation** : L'organisation des données selon des formes normales réduit la redondance et améliore la cohérence.

- **Exemples courants de SGBDR** :
  - **MySQL** : Un des SGBDR les plus utilisés, surtout pour des applications web.
  - **PostgreSQL** : Connu pour sa conformité aux standards et sa robustesse dans la gestion des transactions complexes.
  - **Oracle Database** : Utilisé dans des environnements d'entreprise pour sa performance et ses fonctionnalités avancées.

- **Concepts Clés** :
  - **Tables** : Structures de données en forme de grille où chaque ligne représente un enregistrement et chaque colonne un attribut de cet enregistrement.
  - **Clés primaires** : Identifiant unique pour chaque enregistrement dans une table.
  - **Clés étrangères** : Référence à la clé primaire d'une autre table, permettant de lier des tables entre elles.

## Modélisation via la méthode MERISE : MCD et MLD

- **MCD (Modèle Conceptuel de Données)** : 
  - **Objectif** : Représenter de manière abstraite les entités du système d'information et leurs relations.
  - **Entités** : Objets ou concepts importants du domaine à modéliser (par exemple, `Client`, `Commande`).
  - **Associations** : Relations entre les entités (par exemple, un `Client` passe plusieurs `Commandes`).
  - **Attributs** : Propriétés ou caractéristiques des entités (par exemple, un `Client` a un `nom`, une `adresse`).

  - **Exemple** : 
    - Entités : `Livre`, `Auteur`, `Lecteur`.
    - Relations : `Écrit` entre `Auteur` et `Livre`, `Emprunte` entre `Lecteur` et `Livre`.

- **MLD (Modèle Logique de Données)** : 
  - **Objectif** : Traduire le MCD en un modèle directement utilisable par un SGBDR, en définissant les tables, colonnes, types de données, et relations.
  - **Transformation des relations** : Les relations du MCD sont converties en clés étrangères et en tables de jointure si nécessaire.

  - **Exemple** :
    - Table `livres` : `id`, `titre`, `auteur_id`.
    - Table `auteurs` : `id`, `nom`.
    - Table `lecteurs` : `id`, `nom`.
    - Table de jointure `emprunts` : `lecteur_id`, `livre_id`.

- **Étapes de la Modélisation MERISE** :
  1. **Conception du MCD** : Identification des entités, associations, et attributs.
  2. **Transformation en MLD** : Définition des tables et des relations sous forme de clés étrangères.
  3. **Génération du MLD** : Création des scripts SQL pour mettre en place les structures dans le SGBDR.

## Découverte du langage SQL

- **SQL (Structured Query Language)** : 
  - **Définition** : Langage standard utilisé pour interagir avec les bases de données relationnelles. Il permet de créer, modifier, interroger, et gérer des bases de données.
  - **Catégories de commandes SQL** :
    - **DDL (Data Definition Language)** : Commandes pour définir et modifier la structure de la base de données (`CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`).
    - **DML (Data Manipulation Language)** : Commandes pour manipuler les données (`SELECT`, `INSERT`, `UPDATE`, `DELETE`).
    - **DCL (Data Control Language)** : Commandes pour contrôler l'accès aux données (`GRANT`, `REVOKE`).
    - **TCL (Transaction Control Language)** : Commandes pour gérer les transactions (`COMMIT`, `ROLLBACK`).

- **Exemples pratiques** :
  - **Création d'une table** :
    ```sql
    CREATE TABLE auteurs (
      id SERIAL PRIMARY KEY,
      nom VARCHAR(100) NOT NULL
    );
    ```
  - **Insertion de données** :
    ```sql
    INSERT INTO auteurs (nom) VALUES ('Victor Hugo');
    ```
  - **Requête de sélection** :
    ```sql
    SELECT * FROM livres WHERE auteur_id = 1;
    ```
  - **Mise à jour de données** :
    ```sql
    UPDATE livres SET titre = 'Les Misérables' WHERE id = 1;
    ```
  - **Suppression de données** :
    ```sql
    DELETE FROM livres WHERE id = 1;
    ```

## Principe de fonction de retour standard (callback)

- **Définition** : Une fonction de retour, ou callback, est une fonction passée en argument à une autre fonction. Elle est exécutée après que l'opération principale de la fonction appelante est terminée, permettant une gestion asynchrone des événements.

- **Importance dans les applications web** : Les callbacks sont essentiels pour gérer des opérations qui prennent du temps, comme les requêtes à une base de données, la lecture/écriture de fichiers, ou les opérations réseau. Cela permet à l'application de rester réactive et de ne pas bloquer d'autres opérations pendant l'attente des résultats.

- **Utilisation courante en JavaScript** :
  - **Exemple d'utilisation dans Node.js** :
    ```javascript
    const fs = require('fs');

    fs.readFile('exemple.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
    ```
    Ici, `readFile` est une fonction asynchrone qui lit un fichier. Une fois la lecture terminée, le callback fourni en argument est exécuté pour afficher le contenu du fichier.

- **Combinaison avec les Promises** : Bien que les callbacks soient largement utilisés, les `Promises` et `async/await` sont des alternatives modernes pour gérer les opérations asynchrones, rendant le code plus lisible et évitant le phénomène de "callback hell" (imbriquement excessif des callbacks).
