
# Récapitulatif : SQL et JOIN

## 1. Introduction à SQL

SQL (Structured Query Language) est un langage utilisé pour interagir avec des bases de données relationnelles. Il permet d'effectuer diverses opérations comme la création de tables, la gestion des données (ajout, suppression, modification) et les requêtes complexes.

### Principales commandes SQL
- **SELECT** : Récupérer des données depuis une base de données.
- **INSERT** : Ajouter de nouvelles données.
- **UPDATE** : Modifier des données existantes.
- **DELETE** : Supprimer des données.
- **CREATE TABLE** : Créer une nouvelle table.
- **ALTER TABLE** : Modifier la structure d'une table.

## 2. Les Jointures (JOIN)

Les jointures sont des opérations SQL permettant de combiner des enregistrements de deux ou plusieurs tables en fonction d'une condition. Cela permet de récupérer des données corrélées entre différentes tables.

### Les types de JOIN

1. **INNER JOIN**  
   L'INNER JOIN est utilisé pour récupérer les enregistrements qui ont des correspondances dans les deux tables. Seules les lignes avec des valeurs correspondantes dans les deux tables sont renvoyées.

   **Exemple d'INNER JOIN** :
   ```sql
   SELECT users.name, orders.order_id
   FROM users
   INNER JOIN orders ON users.user_id = orders.user_id;
   ```
   Ce JOIN renvoie les utilisateurs qui ont passé des commandes en associant les tables `users` et `orders` sur l'identifiant utilisateur.

2. **LEFT JOIN (ou LEFT OUTER JOIN)**  
   Le LEFT JOIN récupère toutes les lignes de la table de gauche (première table mentionnée), même si aucune correspondance n'existe dans la table de droite.

   **Exemple de LEFT JOIN** :
   ```sql
   SELECT users.name, orders.order_id
   FROM users
   LEFT JOIN orders ON users.user_id = orders.user_id;
   ```
   Ce JOIN renvoie tous les utilisateurs, même ceux qui n'ont pas passé de commandes. Si aucun enregistrement correspondant n'est trouvé dans `orders`, les colonnes de `orders` seront `NULL`.

3. **RIGHT JOIN (ou RIGHT OUTER JOIN)**  
   Le RIGHT JOIN fonctionne de manière similaire au LEFT JOIN, mais il renvoie toutes les lignes de la table de droite, même si aucune correspondance n'existe dans la table de gauche.

   **Exemple de RIGHT JOIN** :
   ```sql
   SELECT users.name, orders.order_id
   FROM users
   RIGHT JOIN orders ON users.user_id = orders.user_id;
   ```
   Ce JOIN renvoie toutes les commandes, même si aucune correspondance n'est trouvée dans la table `users`.

4. **FULL JOIN (ou FULL OUTER JOIN)**  
   Le FULL JOIN renvoie toutes les lignes lorsque des correspondances sont trouvées dans l'une des deux tables. Si aucune correspondance n'est trouvée, les colonnes correspondantes seront `NULL`.

   **Exemple de FULL JOIN** :
   ```sql
   SELECT users.name, orders.order_id
   FROM users
   FULL OUTER JOIN orders ON users.user_id = orders.user_id;
   ```

### Ressources supplémentaires
- [Inner Join SQL - SQL.sh](https://sql.sh/cours/jointures/inner-join)
