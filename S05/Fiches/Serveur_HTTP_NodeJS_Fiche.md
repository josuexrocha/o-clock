
# Fiche Récapitulative : Serveur HTTP en Node.js

## 1. Serveur HTTP en JavaScript

### Introduction
Node.js est couramment utilisé pour créer des serveurs web grâce à son module intégré `http`. Ce module permet de créer un serveur capable de recevoir et de traiter des requêtes HTTP, puis d'envoyer des réponses HTTP. Cela se fait à l'aide de la fonction `http.createServer`.

### Exemple de Serveur Minimaliste
Pour créer un serveur basique avec Node.js, voici un exemple de code :
```javascript
const http = require('http');
const port = 8000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end('Bienvenue sur notre serveur Node.js!');
});

server.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
```
- `http.createServer` : Crée un serveur HTTP.
- `request` : Contient les informations sur la requête entrante.
- `response` : Utilisé pour envoyer une réponse au client.

### Détails sur la Fonction de Callback
La fonction de callback, passée à `http.createServer`, est exécutée à chaque requête reçue par le serveur. Elle prend deux arguments : `request` et `response`.
- `response.setHeader("Content-Type", "text/plain; charset=utf-8")` : Spécifie que la réponse est du texte brut en UTF-8.
- `response.end('Texte de la réponse')` : Termine la réponse et envoie du contenu.

## 2. Une Requête => Une Réponse

### Rôles du Client et du Serveur
- **Client** : Typiquement un navigateur web qui envoie des requêtes HTTP pour obtenir des ressources comme des pages HTML, des images, etc.
- **Serveur** : Un logiciel qui reçoit les requêtes du client, traite ces requêtes, et renvoie les réponses correspondantes, souvent sous forme de pages HTML, de fichiers, ou de données JSON.

### Communication via HTTP
HTTP (HyperText Transfer Protocol) est le protocole utilisé pour la communication entre le client et le serveur. Le client envoie une requête HTTP, et le serveur répond avec une réponse HTTP. C'est un protocole standardisé qui garantit que les deux parties se comprennent.

### Exemple d’Échange Client-Serveur
1. Le client (navigateur) demande une page via une requête HTTP (GET /index.html HTTP/1.1).
2. Le serveur traite la requête et envoie le contenu demandé (HTML, CSS, JS, etc.).

## 3. Route = URL

### Concept de Route dans un Serveur HTTP
Une **route** est une association entre une URL spécifique et une réponse servie par le serveur. Par exemple, une requête à l'URL `/contact` pourrait renvoyer une page de contact, tandis qu'une requête à `/` renverrait la page d'accueil.

### Gestion des Routes avec Node.js
Voici un exemple de gestion de routes dans un serveur Node.js :
```javascript
const http = require('http');
const port = 8000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (request.url === '/') {
        response.end('Bienvenue sur la page d'accueil!');
    } else if (request.url === '/contact') {
        response.end('Contactez-nous à contact@example.com');
    } else {
        response.end('Page non trouvée');
    }
});

server.listen(port);
```
- `request.url` : Contient l'URL de la requête entrante.
- Le serveur peut utiliser des structures de contrôle comme `if/else` ou `switch` pour déterminer la réponse à renvoyer en fonction de l'URL.

## 4. Routage Simple

### Principe du Routage
Le routage est le processus par lequel le serveur détermine quelle action entreprendre en fonction de l'URL de la requête. Le routage simple consiste à utiliser des conditions basiques pour associer des URLs à des réponses spécifiques.

### Exemple Avancé avec Favicon
Le serveur peut également gérer des requêtes spécifiques comme celle du favicon (icône d'onglet) :
```javascript
const http = require('http');
const port = 8000;

const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        response.statusCode = 404;
        response.end();
        return;
    }

    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (request.url === '/') {
        response.end('Bienvenue sur la page d'accueil!');
    } else if (request.url === '/contact') {
        response.end('Contactez-nous à contact@example.com');
    } else {
        response.end('Page non trouvée');
    }
});

server.listen(port);
```

### Résumé
- Le routage permet de personnaliser la réponse du serveur en fonction de l'URL demandée.
- Chaque route correspond à une URL et renvoie une réponse spécifique.
- Un routage simple peut être implémenté avec des conditions `if/else` pour gérer différentes pages de votre site.
