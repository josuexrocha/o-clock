# Challenge requêtes SQL

## Toutes les promos, dans l'ordre alphabétique

```sql
SELECT * FROM "promo"
ORDER BY name ASC;
```

## Tous les étudiants, dans l'ordre alphabétique des noms de famille

```sql
SELECT * FROM "student"
ORDER BY "last_name" ASC;
```

## Même chose mais avec les prénoms dans l'ordre alphabétique en supplément

```sql
SELECT * FROM "student"
ORDER BY "last_name" ASC, "first_name" ASC;
```

## Tous les étudiants de la promo 135

```sql
SELECT *
FROM "student"
WHERE "promo_id"=135;
```

Alternative made by @Yoann(c)

```sql
SELECT *
FROM "student"
WHERE "promo_id" IN(135);
```

## Les étudiants dont le nom ou le prénom comprend la chaîne de caractères "max"

```sql
SELECT * FROM "student"
WHERE "first_name" ILIKE '%max%'
OR "last_name" ILIKE '%max%';
```

## Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5

Avec les colonnes obligatoires uniquement :

```sql
INSERT INTO "student"
("first_name", "last_name", "promo_id")
VALUES ('Chuck', 'Norris', 5);
```

Avec toutes les colonnes de la table :

```sql
INSERT INTO "student"
("first_name", "last_name", "github_username", "profile_picture_url", "promo_id")
VALUES ('Chuck', 'Norris', NULL, NULL, 5);
```

## Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga

```sql
INSERT INTO "promo"
("name", "github_organization")
VALUES
('César', NULL);
```

## Mettre à jour la promo 5 pour la renommer "Cleo"

```sql
UPDATE promo
SET "name" = 'Cleo'
WHERE "id" = 5;
```

## Supprimer la promo 123

```sql
DELETE FROM "promo"
WHERE "id" = 123;
```
