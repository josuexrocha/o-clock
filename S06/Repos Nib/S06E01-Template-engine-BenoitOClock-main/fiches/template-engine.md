# Moteurs de rendu

Express permet d'utiliser un moteur de template pour facilement et proprement généré le code html à renvoyer aux clients.

## mise en place

Il existe un tas de moteur de templates (ejs, pug, nunchuk...), nous utiliserons EJS

On va avoir besoin d'installer le module

```bash
npm i ejs
```

Une fois le module installé, il faut dire à express de l'utiliser et de lui indiquer où sont stockés les fichiers de template

```javascript
app.set("view engine", "ejs");
app.set("views", "./views");
```

## Utilisation

Pour dire à express de renvoyer au client le html fabriqué à partir d'un template, nous disposons de la méthode `render`.
Cette méthode accepte 2 arguments: le nom du template à utiliser et un objet contenant des données utilisable pour fabriqué le html

```javascript
response.render("home", { property: value });
```

## Création de templates EJS

EJS est un langage de template basé directment sur html, mais qui ajoute quelques balises supplémentaires permettant l'insertion de valeurs ou l'execution de code JS (côté serveur... ce code n'arrivera jamais côté client)

### Les balises EJS les plus courantes

- `<% %>` permet d'insérer du JS qui sera executer mais qui ne renvoie pas de valeur à insérer dans le template
- `<%- %>` permet d'insérer du JS qui sera executer et dont la valeur de retour sera insérer dans le html ET interprété par le navigateur (comme si côté client on utilisait innerHTML)
- `<%= %>` permet d'insérer du JS qui sera executer et dont la valeur de retour sera insérer dans le html MAIS ne sera pas interprété par le navigateur (comme si côté client on utilisait textContent)

## Utilisation de partials

Souvent nos templates contiennent des parties identiques. Il est possible de factoriser ces morceaux de template en utilisant des partials (des morceaux de template qu'on va pouvoir insérer dans d'autres templates).

Ces partials utilisent EXACTEMENT la même syntaxe que nos templates.

Pour insérer un partials dans un template, il faut utiliser la fonction include

```html
<!-- insére le ficher head.ejs qui est dans le dossier partials à l'intérieur du template courant -->
<%- include('partials/head') %>
```
