# Challenge Episode 2

## Partie 1 - Les classes !

En s'inspirant des classes déjà écrites en cours (ex : `Tag` ou `Level`) pour notre projet `oquiz`,
**créer les classes pour toutes les entités de notre application !**

- Une classe par entité et par fichier : `Answer`, `Level`, `Question`, `Quiz`, `Tag`, et `User`.
- Ajouter au dossier `/models`
- Ne pas oublier d'exporter chaque classe. 
- Ne pas oublier les `constructor`s : ils doivent prendre en paramètre un **objet** contenant toutes les valeurs des attributs pour l'instance.

<details>
<summary>Heuuu oui... t'as un exemple ?</summary>

Le but est d'arriver à instancier les entités de cette manières :

```JS

const monTag = new Tag({ name: "un super tag" });
```

Donc, on devrait donc avoir un constructeur du genre...

```JS
class Tag {
  constructor(obj) {
    this.name = obj.name;
  }
};
```

</details>

Notes :

- dans un premier temps, il n'est pas necessaire d'ajouter des setter/getter pour chaque propriété. Les propriétés peuvent très bien toutes rester publiques, selon votre préférence.
  - vous pouvez tester les deux pour voir, bien sûr !
- il n'est pas necessaire d'ajouter des validations pour chaque propriété au niveau du constructeur (et des setters).
  - vous pouvez tester d'en ajouter, bien sûr !

## Partie 2 - Un brin d'héritage

_Do not repeat yourself..._

La propriété `id` est présente dans toutes les classes.
On va donc... la factoriser ! Et pour ce faire, on va utiliser l'héritage !

On propose de créer une classe `CoreModel`, dans le même dossier que les autres, et toutes les classes vont _hériter_ de celle-ci :

- Penser à exporter `CoreModel`.
- Penser à require `CoreModel` dans les autres fichiers.
- Penser à appeler le "constructeur parent" dans les constructeurs des classes filles.

## DES BONUS ?

### Partie 3 - GETTER / SETTER

Dans chaque classe, à commencer par `CoreModel`, coder un "getter" et un "setter" pour les propriétés.

On pense donc à passer les propriétés en `private`, sinon avoir des "getters" et "setters" ne sert à rien !

<details>
<summary>Un exemple </summary>

```js
class CoreModel {
  #id;

  get id() {
    return this.#id;
  };

  set id(value) {
    this.#id = value;
  };
};
```

</details>

Note : oui, c'est long et fastidieux. C'est un bonus !

## Partie 4 - Validation

### Dans les setters

Dans les "setters", rajouter des tests pour vérifier que la donnée passée en argument est du type attendu pour la propriété.

<details>
<summary>Un exemple pour l'ID</summary>

```js
class CoreModel {
  #id;

  set id(value) {
    if (typeof value !== 'number') {
      throw Error("CoreModel.id must be a number !"); // on "lève" une erreur => ça arrête tout !
    }

    this.#id = value;
  }
};
```

</details>

### Dans les constructeurs

Le même principe est possible dans les constructeurs ! On contrôle les valeurs utilisées par l'appelant à l'instanciation.