# Commandes PSQL

## Se connecter à PSQL en tant qu'admin

```bash
sudo -u postgres psql
```

## Se connecter à PSQL avec un utilisateur et une base de données spécifique

```bash
psql -U nom_utilisateur -d nom_bdd
```

⚠️ ATTENTION ! Le mot de passe demandé ne s'affiche pas sur le terminal

## Nettoyer le fil de PSQL

```
\! clear
```

## Voir la liste des bases de données

Affichage simple :

```
\l
```

Avec plus de détails :

```
\l+
```

## Quitter l'affichage d'une table, liste, ...

```
q
```

## Lister les utilisateurs de nos bases de données

```
\du
```

## Lister les tables présentes dans une base de données

```
\dt
```

## Lister les informations des champs d'une table

```
\d nom_table
```

## Importer un fichier SQL pour hydrater notre base de données

```
\i /chemin/vers/fichier.sql
```

## Quitter PSQL

```
\q
```
