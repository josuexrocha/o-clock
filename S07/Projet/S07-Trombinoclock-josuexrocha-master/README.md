# Trombinoclock

## Brief client

![brief client](./docs/Mail%20Nicole%20Trombinoclock.png)

## Challenge Épisode 2

### Étape 1: écrire du SQL

Dans le dossier `docs`, créer un fichier sql.md. Dans ce fichier, écrire les requêtes SQL pour obtenir les informations suivantes :

- toutes les promos, dans l'ordre alphabétique
- tous les étudiants, dans l'ordre alphabétique des noms de famille
- Même chose mais avec les prénoms dans l'ordre alphabétique en supplément
- tous les étudiants de la promo 135
- les étudiants dont le nom ou le prénom comprend la chaîne de caractères "max"

[Lien vers sql.sh](https://sql.sh/)

### Étape 2: SQL + Express

En s'inspirant de ce qui a été fait en cockpit, modifier la fonctionnalité "liste des promos" pour qu'elle utilise une requête SQL !

<details>
<summary>Un coup de main</summary>

Toutes les modifications vont se passer dans le fichier `promoController.js` !

- D'abord il faut pouvoir parler à la base de données. Donc il nous faut un client. Créer et connecter un client `pg`, juste avant la définition du controller.
- Puis dans la méthode qui liste des promos, il faut exécuter une requête SQL !
- Ne pas oublier que la méthode `client.query` ne renvoie pas directement les résultats, il faut définir un _callback_.

```js
promoList: (req, res) => {
  //...
  client.query("du sql", (error, results) => {
    // cette fonction se déclenchera quand la BDD aura répondu.
    // c'est ici qu'il faut soit traiter l'erreur si il y en a une, soit utiliser les résultats !
  });
  // pas de code ici : on ne fait rien tant que la BDD n'a pas répondu!
};
```

</details>

### ⭐ Bonus 1: Des promesses, des promesses, toujours des promesses !

Si on regarde la documentation du module `pg` https://node-postgres.com/features/queries, on voit qu'il existe une autre solution que les callback : les promesses (`Promise`).
Votre mission, si vous l'acceptez : executer une requête SQL, toujours avec `client.query`, mais en utilisant le mécanisme des promesses.

De la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises

<details>
<summary>Un coup de main</summary>

Notre appel à client.query qui ressemblait à :

```js
client.query("du sql", (error, results) => {
  // cette fonction se déclenchera quand la BDD aura répondu.
  // c'est ici qu'il faut soit traiter l'erreur si il y en a une, soit utiliser les résultats !
});
```

Va devenir

```js
client.query("du sql").then((data) => {
  // cette fonction se déclenchera quand la BDD aura répondu.
  // c'est ici qu'il faut utiliser les résultats
  // par contre, cette fonction ne sera pas appelée en cas d'erreur.
});
```

Et si on veut traiter l'erreur

```js
client
  .query("du sql")
  .then((data) => {
    // cette fonction se déclenchera quand la BDD aura répondu.
    // c'est ici qu'il faut utiliser les résultats
    // par contre, cette fonction ne sera pas appelée en cas d'erreur.
  })
  .catch((error) => {
    // fonction appelée en cas d'erreur
  });
```

</details>

### ⭐⭐ Bonus 2: détails et liste des étudiants

Sur le même principe que l'étape 2, modifier les fonctionnalités "détails d'une promo" et "liste des étudiants d'une promo" en utilisant une requête SQL (en mode promesses).
