
# Middleware et Express

## Sommaire
- [Middleware et Express](#middleware-et-express)
  - [Sommaire](#sommaire)
  - [Middleware : Ouvrier à la chaîne](#middleware--ouvrier-à-la-chaîne)
    - [Qu'est-ce qu'un Middleware ?](#quest-ce-quun-middleware-)
    - [Fonctionnement du Design Pattern Middleware](#fonctionnement-du-design-pattern-middleware)
  - [Express : Un Moteur de Middlewares](#express--un-moteur-de-middlewares)
    - [Exécution Conditionnelle avec app.get()](#exécution-conditionnelle-avec-appget)
    - [Exécution Inconditionnelle avec app.use()](#exécution-inconditionnelle-avec-appuse)
    - [Importance de l'Ordre des Middlewares](#importance-de-lordre-des-middlewares)

---

## Middleware : Ouvrier à la chaîne

### Qu'est-ce qu'un Middleware ?
Le terme **Middleware** désigne un ensemble de fonctions ou de sous-programmes qui sont exécutés en séquence pour traiter une requête avant de produire une réponse. Dans le contexte de **Node.js** et **Express**, un middleware est une fonction qui reçoit l'objet `Request`, l'objet `Response`, et un troisième argument `next` qui permet de passer au middleware suivant dans la chaîne.

Un middleware peut être comparé à un **ouvrier sur une chaîne de production** : chaque ouvrier a une tâche spécifique et la chaîne progresse d'une étape à l'autre jusqu'à ce que le produit soit terminé.

### Fonctionnement du Design Pattern Middleware
Le **Design Pattern Middleware** consiste à organiser le code en une série de fonctions spécialisées qui s'enchaînent pour accomplir une tâche plus complexe. Cela permet une grande flexibilité et modularité dans le traitement des requêtes HTTP.

**Exemple d'organisation** :
- Middleware 1 : Validation de la requête
- Middleware 2 : Authentification
- Middleware 3 : Autorisation
- Middleware 4 : Traitement de la requête et génération de la réponse

Chacun de ces middlewares a deux options :
1. **Répondre à la requête** : Si le middleware peut répondre, il le fait et la chaîne s'arrête.
2. **Passer la main au middleware suivant** : Si le middleware ne peut pas répondre complètement, il appelle `next()` pour passer au middleware suivant.

---

## Express : Un Moteur de Middlewares

### Exécution Conditionnelle avec app.get()
Dans Express, le middleware peut être exécuté conditionnellement en fonction de l'URL de la requête. Cela se fait avec `app.get(url, middleware)` :

```javascript
app.get('/home', (req, res, next) => {
    // Ce middleware ne sera exécuté que pour les requêtes sur '/home'
    console.log('Requête sur /home');
    next();
});
```

Dans cet exemple, le middleware est exécuté uniquement si l'URL de la requête correspond à `/home`. Après son exécution, `next()` est appelé pour passer au middleware suivant ou pour répondre à la requête.

### Exécution Inconditionnelle avec app.use()
`app.use(middleware)` permet d'exécuter un middleware sans condition sur l'URL. Ce middleware sera exécuté pour chaque requête, quelle que soit l'URL :

```javascript
app.use((req, res, next) => {
    console.log('Middleware exécuté pour toutes les requêtes');
    next();
});
```

Ce middleware sera exécuté pour toutes les requêtes entrantes, indépendamment de leur URL.

### Importance de l'Ordre des Middlewares
L'ordre dans lequel les middlewares sont définis est crucial, car chaque middleware peut modifier l'objet `Request`, l'objet `Response`, ou décider de répondre à la requête.

**Exemple** :
```javascript
app.use(express.static('public')); // Middleware pour servir les fichiers statiques

app.use((req, res, next) => {
    console.log('Middleware général');
    next();
});

app.get('/home', (req, res) => {
    res.send('Page d'accueil');
});
```

Dans cet exemple, si le middleware qui sert les fichiers statiques est placé après un middleware général, il ne pourra pas intercepter les requêtes pour des fichiers statiques. Cela montre que **l'ordre de chaînage est essentiel** pour obtenir le comportement souhaité.

---
