
# Cheatsheet SQL pour PostgreSQL

Voici une fiche récapitulative des commandes SQL les plus couramment utilisées dans **PostgreSQL** pour vous aider à manipuler et interroger des bases de données relationnelles.

---

## Connexion à PostgreSQL

### Se connecter à une base de données

```bash
psql -U utilisateur -d nom_base_de_données
```

## Sélection de données

### Sélectionner toutes les colonnes d'une table

```sql
SELECT * FROM nom_table;
```

### Sélectionner des colonnes spécifiques

```sql
SELECT colonne1, colonne2 FROM nom_table;
```

### Utiliser un alias pour une colonne ou une table

```sql
SELECT colonne AS alias_colonne FROM nom_table AS alias_table;
```

### Filtrer les données avec WHERE

```sql
SELECT * FROM nom_table WHERE condition;
```

**Opérateurs courants :**

- `=` égal
- `<>` différent
- `>` supérieur
- `<` inférieur
- `>=` supérieur ou égal
- `<=` inférieur ou égal

### Utiliser les opérateurs logiques

```sql
SELECT * FROM nom_table WHERE condition1 AND/OR condition2;
```


### Rechercher des modèles avec LIKE et ILIKE

```sql
-- Sensible à la casse
SELECT * FROM nom_table WHERE colonne LIKE 'pattern';

-- Insensible à la casse (spécifique à PostgreSQL)
SELECT * FROM nom_table WHERE colonne ILIKE 'pattern';
```

- `%` : représente zéro, un ou plusieurs caractères
- `_` : représente un seul caractère

### Filtrer avec IN, BETWEEN, et IS NULL

```sql
-- IN
SELECT * FROM nom_table WHERE colonne IN ('valeur1', 'valeur2');

-- BETWEEN
SELECT * FROM nom_table WHERE colonne BETWEEN valeur1 ET valeur2;

-- IS NULL et IS NOT NULL
SELECT * FROM nom_table WHERE colonne IS NULL;
SELECT * FROM nom_table WHERE colonne IS NOT NULL;
```

## Tri et limitation des résultats

### Trier les résultats avec ORDER BY

```sql
SELECT * FROM nom_table ORDER BY colonne ASC|DESC;
```

### Limiter le nombre de résultats avec LIMIT et OFFSET

```sql
SELECT * FROM nom_table LIMIT nombre_de_lignes OFFSET décalage;
```

## Fonctions d'agrégation

- `COUNT(colonne)` : compte le nombre de valeurs
- `SUM(colonne)` : somme des valeurs numériques
- `AVG(colonne)` : moyenne des valeurs numériques
- `MAX(colonne)` : valeur maximale
- `MIN(colonne)` : valeur minimale

```sql
SELECT COUNT(*) FROM nom_table;
```


## Regroupement des données

### GROUP BY et HAVING

```sql
SELECT colonne, COUNT(*) FROM nom_table GROUP BY colonne;

-- Utiliser HAVING pour filtrer après le regroupement
SELECT colonne, COUNT(*) FROM nom_table GROUP BY colonne HAVING COUNT(*) > valeur;
```

## Jointures entre tables

### INNER JOIN (jointure interne)

```sql
SELECT * FROM table1 INNER JOIN table2 ON table1.colonne = table2.colonne;
```

### LEFT JOIN (jointure externe gauche)

```sql
SELECT * FROM table1 LEFT JOIN table2 ON table1.colonne = table2.colonne;
```

### RIGHT JOIN (jointure externe droite)

```sql
SELECT * FROM table1 RIGHT JOIN table2 ON table1.colonne = table2.colonne;
```

### FULL OUTER JOIN (jointure externe complète)

```sql
SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.colonne = table2.colonne;
```

### CROSS JOIN (produit cartésien)

```sql
SELECT * FROM table1 CROSS JOIN table2;
```

