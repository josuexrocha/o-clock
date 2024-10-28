# Challenge Episode 1 

## Partie 1 - MLD

En utilisant l'analyse préliminaire de la BDD, le MCD, et les [fiches récap Kourou](https://kourou.oclock.io/ressources/fiche-recap/mld),
**écrire le MLD de l'application** ! Un simple fichier texte fera l'affaire pour le MLD

Rappel : la difficulté de cet exercice de traduire les associations entre les entités, en termes de clé primaire / clé étrangère / table de liaisons, selon les cardinalités spécifiées dans le MCD. 

## Partie 2 - Setup BDD

Créer un utilisateur et une BDD pour le projet `oquiz` dans Postgres, à l'aide des [commandes habituelles](https://kourou.oclock.io/ressources/fiche-recap/postgresql/)


# Des bonus à foisons ! 

Les parties suivantes seront corrigés (très) rapidement demain. Elles sont donc facultatives et exploratoires.
L'objectif est de vous familiariser avec les scripts SQL de creation de tables et de remplissage de tables (seeding). 

## Partie 3 - Creation des tables 

Créer un fichier `data/create_tables.sql` dont le but est de générer les tables suivantes dans la base `oquiz`, en suivant les spécifications du MLD :
- `Tag`
- `User`
- `Quiz` (ici, il faudra penser à traduire l'association `User <-> Quiz`)

(Optionnel : vous pouvez faire les autres tables, mais c'est long !)

Exécuter ce fichier à l'aide de `psql` et vérifier le bon état des tables.

Optionnel : ajouter un **script npm** `db:create` dans le `package.json` afin de lancer automatiquement la commande `psql` depuis le projet. 

## Partie 4 - Seeding des tables

Créer un fichier `data/populate_tables.sql` pour remplir la BDD ! Y insérer :
- quelques `Tag`
- quelques `User`
- quelques `Quizz`

Exécuter ce fichier à l'aide de `psql` et vérifier le bon état des tables. 

Optionnel : 
- ajouter un **script npm** `db:seed` dans le `package.json` afin de lancer automatiquement la commande `psql` depuis le projet. 
- ajouter un **script npm** `db:reset` dans le `package.json` afin de lancer automatiquement les commandes `db:create` et `db:reset` !

## Partie 5 - Wireframe

Bon, et si vraiment vous vous ennuyez et que les wireframes n'ont pas été terminées en cockpit, n'hésitez pas à faire des jolis wireframes pour les pages qui nous manque !