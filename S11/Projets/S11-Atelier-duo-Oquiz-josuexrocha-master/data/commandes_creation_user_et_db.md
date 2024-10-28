# Commandes

Seulement pour le cours, n'a pas vocation dans la vrai vie à figurer dans notre code source versionné, il contient le mot de passe !

```sh
# se connecter en tant qu'utilisateur postgres au SGBD
sudo -i -u postgres psql
```

```sql
-- création du user oquiz_u avec oquiz_p comme password
CREATE ROLE oquiz_u WITH LOGIN PASSWORD 'oquiz_p';
```

```sql
-- création de la base de données oquiz_d avec oquiz_u comme propriétaire
CREATE DATABASE oquiz_d OWNER oquiz_u;
```

```sh
# exécution du script de création de la structure la base de données sur la base de données précédemment créée
psql -U oquiz_u -d oquiz_d -f data/create_tables.sql 
```

```sh
# exécution du script de seeding sur la base de données oquiz_d
psql -U oquiz_u -d oquiz_d -f data/populate_tables.sql 
```
