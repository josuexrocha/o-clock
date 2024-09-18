
# Internet, Client-Serveur, et Protocole HTTP

## Introduction

En tant que développeur web, vous interagissez avec deux éléments principaux :
- **Le développement** : Écrire du code dans un langage de programmation en utilisant l'algorithmique et les mots-clés spécifiques.
- **Le Web et le protocole HTTP** : Ensemble des documents multimédias disponibles via Internet.

## Qu'est-ce qu'Internet ?

### Historique et évolution
Internet, initialement conçu à des fins militaires et universitaires, a évolué pour devenir un réseau mondial utilisé à des fins commerciales, gouvernementales et personnelles. Ce réseau est composé de deux parties :
1. **Physique** : Des kilomètres de câbles et de machines interconnectées à travers le monde.
2. **Services** : Des forums, messageries, courriels, et surtout, le **World Wide Web (WWW)**.

### Fonctionnement
L'informatique, à travers Internet, consiste à faire circuler des informations entre différentes entités, qu'elles soient séparées géographiquement ou temporellement.

## Le modèle Client-Serveur

Le modèle client-serveur est basé sur un dialogue de **requêtes** et de **réponses**. Le client demande une information, et le serveur répond. Voici les rôles détaillés de chaque entité :

### Côté client
- **Client Web** (navigateur, REST client, programme `curl`, etc.) :
  - Envoie une requête HTTP au serveur.
  - Reçoit et traite la réponse HTTP.

### Côté serveur
- **Serveur Web frontal** (Apache, Nginx, etc.) :
  - Reçoit les requêtes HTTP.
  - Répond directement (si réponse en cache ou fichier statique).
  - Délègue à un serveur applicatif pour les requêtes plus complexes.

- **Serveur applicatif** (PHP, Node.js, etc.) :
  - Contient la logique métier.
  - Coordonne avec une base de données.
  - Génère des réponses sous forme de HTML, JSON, texte, etc.

- **Base de données** (MySQL, MongoDB, etc.) :
  - Stocke et sécurise les informations recherchées par le client.

## Le protocole HTTP

HTTP (Hypertext Transfer Protocol) est le protocole qui régit la communication entre un client et un serveur.

### Structure des requêtes et réponses
Les requêtes et réponses HTTP sont composées de deux parties :
1. **En-têtes (headers)** : Contiennent des informations sur la requête/réponse (type de contenu, encodage, cookies, etc.).
2. **Corps (body)** : Contient le contenu de la requête ou de la réponse (texte, JSON, HTML, images, etc.).

#### Exemple de requête HTTP :

```
POST /user/login HTTP/1.1
Host: oclock.io
User-Agent: Mozilla/5.0
Accept: text/html,application/xhtml+xml
...
email=john%40oclock.io&password=John123
```

#### Exemple de réponse HTTP :

```
HTTP/1.1 200 OK
Server: Apache/2.4.10 (Debian)
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
...
<p>Ceci est une page :)</p>
```

## Conclusion

Le modèle **client-serveur** et le **protocole HTTP** sont au cœur des interactions sur Internet. Le client envoie des requêtes au serveur, qui lui renvoie des réponses structurées, facilitant ainsi la communication et l'échange d'informations à travers le réseau mondial.

---

*Dernière modification : 11 octobre 2023*
