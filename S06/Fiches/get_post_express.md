
# Wiki Dev Web - Saison 6 : Méthodes HTTP GET et POST avec Express

## Sommaire
1. [Introduction aux Méthodes HTTP](#introduction-aux-méthodes-http)
   - [GET : Envoi de Données via l'URL](#get--envoi-de-données-via-lurl)
   - [POST : Envoi de Données via le Corps de la Requête](#post--envoi-de-données-via-le-corps-de-la-requête)
2. [Gestion des Requêtes GET et POST avec Express](#gestion-des-requêtes-get-et-post-avec-express)
   - [Récupération des Paramètres GET](#récupération-des-paramètres-get)
   - [Récupération des Données POST](#récupération-des-données-post)
   - [Importance du Middleware express.urlencoded()](#importance-du-middleware-expressurlencoded)

---

## Introduction aux Méthodes HTTP

### GET : Envoi de Données via l'URL
La méthode **GET** est utilisée pour récupérer des ressources à partir d'un serveur. Lorsqu'une requête GET est effectuée, les données peuvent être envoyées au serveur via l'URL sous forme de paramètres. Ces paramètres sont attachés à l'URL après un point d'interrogation `?` et sont séparés par des `&`.

**Exemple d'URL avec paramètres GET** :
```
https://www.huffingtonpost.fr/?coucou=oclock
```
- Ici, `coucou=oclock` est un paramètre GET envoyé au serveur.

**Caractéristiques** :
- **Visibilité** : Les paramètres GET sont visibles dans l'URL, ce qui n'est pas sécurisé pour des données sensibles comme les mots de passe.
- **Partage** : L'URL complète, y compris les paramètres GET, peut être partagée facilement.
- **Limitation** : Le volume de données pouvant être envoyé via GET est limité.

### POST : Envoi de Données via le Corps de la Requête
La méthode **POST** est utilisée pour envoyer des données au serveur de manière plus sécurisée et en plus grande quantité. Contrairement à GET, les données sont envoyées dans le corps de la requête, ce qui les rend invisibles dans l'URL.

**Exemple d'utilisation** :
Lorsqu'un utilisateur soumet un formulaire de connexion, les informations comme le nom d'utilisateur et le mot de passe sont envoyées au serveur via une requête POST.

**Caractéristiques** :
- **Sécurité** : Les données envoyées via POST ne sont pas visibles dans l'URL.
- **Capacité** : POST peut transporter une grande quantité de données, adaptée pour les formulaires et autres soumissions importantes.

---

## Gestion des Requêtes GET et POST avec Express

### Récupération des Paramètres GET
Dans Express, les paramètres GET sont récupérés via l'objet `request.query`, qui contient un objet avec les paires clé-valeur envoyées dans l'URL.

**Exemple** :
```javascript
router.get('/search/results', (request, response) => {
    const texteRecherche = request.query.recherche;
    console.log(texteRecherche); // Affiche la valeur du paramètre 'recherche'
});
```
Ici, si l'URL est `http://localhost:3000/search/results?recherche=pouet`, la variable `texteRecherche` contiendra la valeur `'pouet'`.

### Récupération des Données POST
Les données envoyées via une requête POST sont récupérées à partir de l'objet `request.body` dans Express.

**Exemple** :
```javascript
router.post('/login', (request, response) => {
    const login = request.body.login;
    const password = request.body.password;
    console.log(login, password); // Affiche les valeurs envoyées dans le formulaire
});
```

### Importance du Middleware express.urlencoded()
Pour que `request.body` soit peuplé avec les données POST, il est nécessaire d'ajouter un middleware spécifique avant les routes POST :

```javascript
app.use(express.urlencoded({ extended: true }));
```
Ce middleware analyse les données encodées en URL dans le corps de la requête et les place dans `request.body`. Sans ce middleware, `request.body` restera indéfini.

---
