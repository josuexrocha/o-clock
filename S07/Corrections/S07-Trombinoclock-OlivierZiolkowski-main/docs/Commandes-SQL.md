# Commandes SQL

## Créer un utilisateur

```sql
CREATE USER nom_utilisateur WITH LOGIN PASSWORD 'mot_de_passe';
```

## Supprimer un utilisateur

```sql
DROP USER nom_utilisateur;
```

## Créer une base de données

```sql
CREATE DATABASE nom_de_ma_base OWNER 'nom_utilisateur';
```

## Récupérer toutes les entrées d'une table

```sql
SELECT * FROM nom_table;
```

## Récupérer les entrées d'une seule colonne

```sql
SELECT nom_colonne FROM nom_table;
```

## Récupérer une information précise

```sql
SELECT * FROM nom_table
WHERE nom_colonne = 'valeur';
```

## Récupérer des infos correspondant à une OU une autre condition

```sql
SELECT * FROM nom_table
WHERE nom_colonne = 'valeur'
OR autre_nom_colonne = 'autre_valeur';
```

## Récupérer des infos correspondant à plusieurs conditions

```sql
SELECT * FROM nom_table
WHERE nom_colonne = 'valeur'
AND autre_nom_colonne = 'autre_valeur';
```

## Récupérer des informations via un champ de recherche

```sql
SELECT * FROM nom_table
WHERE nom_colonne ILIKE 'm%';
```

`ILIKE` = Recherche une information sans respecter la casse
`LIKE` = Recherche une information en respectant la casse (minuscule, majuscule, ...)
`%` = indique une suite de caractère optionnel et multiple

## Créer une nouvelle table dans une base de données

```sql
 CREATE TABLE "nom_table" (
"colonne_clé_primaire" SERIAL PRIMARY KEY,
"colonne" TYPE CONTRAINTE,
"colonne" TYPE CONTRAINTE,
"colonne" TYPE CONTRAINTE
);
```

## Ajouter une nouvelle entrée dans une table

```sql
INSERT INTO "nom_table" (
"colonne_1",
"colonne_2",
"colonne_3"
)
VALUES (
'valeur_colonne_1',
'valeur_colonne_2',
'valeur_colonne_3'
);
```

## Insérer de nouvelles entrées multiples dans une table

```sql
INSERT INTO "nom_table" (
"colonne_1",
"colonne_2",
"colonne_3"
)
VALUES
('valeur_colonne_1', 'valeur_colonne_2', NULL),
('valeur_colonne_1', 'valeur_colonne_2', 'valeur_colonne_3');

```

On ajoute `NULL` si un champ n'est pas renseigné

## Mettre à jour une entrée dans une table

Si on souhaite modifier via le verbe HTTP (PUT) :

```sql
UPDATE "nom_table"
SET
"colonne_1" = 'valeur_colonne_1',
"colonne_2" = 'valeur_colonne_2',
"colonne_3" = ' nouvelle_valeur_colonne_3'
WHERE id = 1;
```

Si on souhaite modifier via le verbe HTTP (PATCH) - modification ciblée :

```sql
UPDATE "nom_table"
SET
"colonne_3" = ' nouvelle_valeur_colonne_3'
WHERE "clé_primaire" = 'valeur_clé_primaire';
```

## Supprimer une entrée d'une table

```sql
DELETE FROM "nom_table"
WHERE "clé_primaire" = 'valeur_clé_primaire';
```

## Faire une jointure entre deux tables

```sql
SELECT * FROM table_1
INNER JOIN table_2
ON table_1.clé_étrangère = table_2.clé_primaire;
```

## Donner un alias à un nom de colonne

```sql
SELECT table.name AS table_name
FROM table;
```

## Renommer une colonne d'une table

```sql
ALTER TABLE "nom_table"
RENAME COLUMN "ancien_nom_colonne" TO "nouveau_nom_colonne";
```

## Vider une table de ses données

```sql
TRUNCATE TABLE "nom_table";
```

## Supprimer une table

```sql
DROP TABLE "nom_table";
```
