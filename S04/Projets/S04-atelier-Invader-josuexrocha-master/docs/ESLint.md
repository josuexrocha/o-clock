## ESLint

## Kesako ?

C'est un outil d'analuyse de code qui permet de : 
- **repérer des erreurs** de syntaxe.
  - ex : repérer les variables non définies ; non utilisées...
- assurer une **cohérence dans le style** du code.
  - ex : force l'ajout des `;` là où necessaire ; vérifier l'indentation...

## 1. Pré-requis (à faire une fois)

### 1.1. Installer NVM

Fermer VSCode et tout terminaux déjà ouvert.

Puis ouvrir un nouveau terminal (hors VSCode).

- `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
  - (confirmer l'installation si besoin).
  - puis **quitter ce terminal** et en réouvrir un nouveau.

- `nvm -v` 
  - vérification de la version : peu importe.

### 1.2. Installer Node 20

- `nvm install 20`
- `nvm use 20`

En cas d'erreur :

> Your user’s .npmrc file (${HOME}/.npmrc)  
> has a `globalconfig` and/or a `prefix` setting, which are incompatible with nvm.  
> Run `nvm use --delete-prefix v20.12.2` to unset it.  

- `nvm use --delete-prefix v20.12.2`
- `nvm alias default 20`

- `node -v`
  - vérification de la version : **>=20.XX.X**

### 1.3. Installer l'extension VSCode ESLint

- Ouvrir VSCode.
- Se rendre dans les extensions.
- Chercher l'extension nommée `ESLint`.
- Installer cette extension.


## 2. Mise en place (dans chaque projet)

- Ouvrir le projet à configurer dans VSCode
- Ouvrir son terminal à la **racine** de ce projet pour lancer les commandes suivantes.

### 2.1. Installer ESLint localement

- Installer ESLint localement (= dans le projet)
  - `npm install --save-dev eslint` 

Note : cela va générer 2 fichiers (`package.json` & `package-lock.json`) et 1 dossier (`node_modules`). On en reparlera.

### 2.2. Masquer les `node_modules` de Git/Github

- Créer un fichier `.gitignore` contenant le code suivant  :

```
node_modules/
```

### 2.3. Créer un fichier de configuration

- Créer un fichier `eslint.config.js` (toujours à la racine du projet)
- Et y ajouter le contenu suivant : 

```js
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      semi: "error",
      indent: ["error", 2],
    }
  }
];
```

### 2.4. Penser à commit

Ca ne fait pas de mal de sauvegarder sa configuration !