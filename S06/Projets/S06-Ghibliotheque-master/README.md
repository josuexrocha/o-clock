# Ghibliotheque - Les films du studio Ghibli

## Révision 01 - Révisions - Architectures & routes

<details><summary>
Révision EJS, public folder, routes, routes paramétrées...
</summary>

<br>

Votre mission, si vous l'acceptez : 

**Faire un joli site de présentation des (merveilleux) films du studio Ghibli** 

Pour ça, trois routes : 

- Route `/` : 
  - affiche une **page d'accueil**, avec : 
    - une belle entête, qu'on pourra réutiliser dans les vues suivantes
    - un lien vers la page des liste des films


- Route `/films` : 
  - affiche la **liste des films**
  - on reste sobre pour chaque film : juste le `nom` du film suffira très bien.
    - éventuellement l'image de `l'affiche` du film si on veut faire un peu de CSS
  - si l'utilisateur clique sur un des films


- Route `/films/:id` : 
  - affiche la **page d'un** film 
    - (celui dont l'ID match la requête)
  - on y affiche les autres informations qu'on possède sur le film : `titre`, `titre original`, `description`, `director`, `image de l'affiche`, `date de sortie`, `durée du film`

- En bonus : 
  - une **page 404**, si l'utilisateur accède à une route non déclarée ! 

Pour parvenir à ce résultat, vous pouvez appliquer les notions vues en cours ! 


Pour l'intégration (HTML/CSS), c'est libre ! Un mot d'ordre **faites sobre** ! L'objectif n'est pas de travailler le CSS ;) 


Bonne chance !

</details>

## Révision 02 - Apprentissage Formulaire, GET et POST

<details><summary>
Révision/approfondissement FORM, GET & POST
</summary>

- Sur la page d'accueil : 
   - Rajouter un **formulaire de recherche** qui déclenche un GET sur la route `/search` : 
      - avec un input pour faire une recherche
      - et un bouton pour soumettre le formulaire
   - Implémenter la route GET `/search` côté backend : 
      - dans un premier temps, cette route renvoie **une page** qui liste tous les films (similaire à la route /films donc).
      - puis dans un second temps, cette route accepte des query parmams : 
        - si on appelle cette route avec `/search?title=of` (par exemple), on affiche uniquement les films qui possède la chaine de caractère `"of"` dans le titre du film.
        - (bonus) si on appelle cette route avec `/search?order=asc`, on affiche les films triés par ordre alphabétique du titre. Côté affichage, dans le formulaire, on pourrait mettre une checkbox qui, lorsqu'elle est cochée, rajoute ce query params dans la requête !

- Sur la page d'accueil : 
   - Rajouter un **formulaire de login** qui déclenche un POST sur la route `/login` :
      - avec un input pour ajouter le pseudo de l'utilisateur
      - et un bouton pour soumettre le formulaire
   - Implémenter la route POST `/login` côté backend : 
      - elle affiche une page avec écrit "Bonjour PSEUDO_DE_L_UTILISATEUR", et ça sera très bien !

</details>
