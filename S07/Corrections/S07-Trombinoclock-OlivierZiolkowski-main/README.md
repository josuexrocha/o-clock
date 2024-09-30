# Trombinoclock

## Brief client

![brief client](./docs/Mail%20Nicole%20Trombinoclock.png)

## Challenge Épisode 4

### Ajouter un étudiant

Si ce n'est pas déjà fait, ajouter sur la page d'accueil un nouveau lien "Ajouter un étudiant" qui pointe vers l'url `/admin/addStudent`.

#### Étape 1: afficher le formulaire

Implémenter la route `/admin/addStudent` et le traitement dans un nouveau controller `adminController`.  
Une version HTML du formulaire est dispo dans le dossier intégration (`ajouter-etudiant.html`).

#### Étape 2 : Remplir le select

Dans la route qui vient d'être implémentée, inspire-toi de ce qui a été fait dans les autres controllers pour remplir le `<select>` du formulaire avec des `<option>` qui représentent les promos. Bien sur, la liste des promos doit venir de la base de données !

<details>
<summary>Un coup de main ?</summary>

- Commence par require `dataMapper` dans le controller `adminController`.
- Il faut ensuite appeler `dataMapper.getAllPromotions`, pour récupérer la liste des promotions !
- N'oublie pas le traitement de l'erreur éventuelle, puis passe la liste des promotions à la view `addStudent`.
- Dans la view `addStudent`, utilise la liste des promos pour créer des `<option>`. Puisque c'est une liste, il faudra une boucle.

</details>

#### Étape 3 :star: Bonus : Traiter le POST

Utilise tout ce que tu connais pour traiter les informations du formulaire et ajouter un étudiant dans la base de données !

Remarque : on a déjà préparé la requête SQL ! cf [docs/sql.md](./docs/sql.md)

<details>
<summary>Un peu d'aide ?</summary>

- Il faut d'abord ajouter le middleware `express.urlencoded({extended: true})` à `app` dans `index.js`. Sinon `req.body` n'existera pas !
- Ensuite, il faut définir une route POST qui va déclencher la méthode `adminController.addStudent`.
- Il faut maintenant coder la méthode `adminController.addStudent` !
  - Ajoute une nouvelle méthode `addStudent(studentInfo)` dans le `dataMapper`. Cette méthode doit lancer une requête "INSERT ..." en utilisant les paramètres passés dans l'objet `studentInfo`. Inspire toi de ce qui a été fait précédemment !
  - Dans `adminController.addStudent`, il faut maintenant appeler `dataMapper.addStudent` en lui passant les bons paramètres !
  - Si tout s'est bien passé, redirige l'utilisateur vers la page de détails de la promotion sélectionnée.
  </details>
