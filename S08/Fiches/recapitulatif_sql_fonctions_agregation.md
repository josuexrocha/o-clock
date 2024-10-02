
# Récapitulatif : Fonctions d'Agrégation SQL

Les fonctions d'agrégation SQL sont utilisées pour effectuer des calculs sur un ensemble de valeurs et renvoyer une seule valeur. Ces fonctions sont souvent utilisées avec des clauses comme `GROUP BY` pour regrouper les résultats en fonction de certaines colonnes.

## 1. SUM
La fonction `SUM()` renvoie la somme de toutes les valeurs d'une colonne numérique.

**Exemple d'utilisation** :
```sql
SELECT SUM(salary) AS total_salary
FROM employees;
```
Ce code calcule la somme des salaires de tous les employés.

## 2. AVG
La fonction `AVG()` renvoie la moyenne des valeurs d'une colonne numérique.

**Exemple d'utilisation** :
```sql
SELECT AVG(salary) AS average_salary
FROM employees;
```
Cela renvoie le salaire moyen des employés.

## 3. MAX
La fonction `MAX()` renvoie la valeur maximale d'une colonne.

**Exemple d'utilisation** :
```sql
SELECT MAX(salary) AS highest_salary
FROM employees;
```
Cela renvoie le salaire le plus élevé parmi les employés.

## 4. MIN
La fonction `MIN()` renvoie la valeur minimale d'une colonne.

**Exemple d'utilisation** :
```sql
SELECT MIN(salary) AS lowest_salary
FROM employees;
```
Cela renvoie le salaire le plus bas parmi les employés.

## 5. GROUP BY
La clause `GROUP BY` est utilisée pour regrouper des lignes ayant des valeurs identiques dans des colonnes spécifiées. Elle est souvent utilisée avec des fonctions d'agrégation comme `SUM()`, `AVG()`, `MAX()`, etc.

**Exemple d'utilisation** :
```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;
```
Dans cet exemple, les employés sont regroupés par département et le salaire total est calculé pour chaque département.

### Notes sur `GROUP BY`
- Toutes les colonnes mentionnées dans la clause `SELECT` qui ne sont pas des fonctions d'agrégation doivent être incluses dans la clause `GROUP BY`.
- `GROUP BY` est utilisé pour obtenir des résultats agrégés par groupe de lignes ayant des valeurs similaires.

## 6. Combinaison avec HAVING
`HAVING` est utilisé pour filtrer les groupes créés par `GROUP BY`, à la manière de `WHERE` mais appliqué après l'agrégation.

**Exemple d'utilisation** :
```sql
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
```
Cet exemple renvoie les départements ayant un salaire moyen supérieur à 50 000.

## Ressources supplémentaires
- [Fonctions d'agrégation SQL](https://sql.sh/cours/fonctions-aggregation)
