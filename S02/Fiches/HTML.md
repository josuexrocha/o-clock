
# 1. Introduction au HTML

HTML (HyperText Markup Language) est le langage standard utilisé pour créer des pages web. Il permet de structurer le contenu en utilisant des éléments appelés balises.

---

# 2. Structure de base d'un document HTML

Tout document HTML commence par une structure de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Titre de la page</title>
</head>
<body>
    <!-- Contenu de la page -->
</body>
</html>
```

- `<!DOCTYPE html>` : Indique au navigateur que le document est au format HTML5.
- `<html lang="fr">` : Élément racine qui englobe tout le contenu de la page. L'attribut `lang` spécifie la langue du document.
- `<head>` : Contient les métadonnées de la page (titre, encodage, styles, scripts).
- `<body>` : Contient le contenu visible de la page web.

---

# 3. Balises HTML courantes

- ## Titres et sous-titres

  ```html
  <h1>Titre de niveau 1</h1>
  <h2>Titre de niveau 2</h2>
  <!-- Jusqu'à <h6> -->
  ```

- ## Paragraphes

  ```html
  <p>Ceci est un paragraphe.</p>
  ```

- ## Liens hypertextes

  ```html
  <a href="https://www.exemple.com">Lien vers un site</a>
  ```

- ## Images

  ```html
  <img src="image.jpg" alt="Description de l'image">
  ```

- ## Listes

  - **Liste non ordonnée**

    ```html
    <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
    </ul>
    ```

  - **Liste ordonnée**

    ```html
    <ol>
        <li>Élément 1</li>
        <li>Élément 2</li>
    </ol>
    ```

- ## Tableaux

  ```html
  <table>
      <tr>
          <th>En-tête 1</th>
          <th>En-tête 2</th>
      </tr>
      <tr>
          <td>Donnée 1</td>
          <td>Donnée 2</td>
      </tr>
  </table>
  ```

- ## Formulaires

  ```html
  <form action="/action_page.php" method="post">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom">
      <input type="submit" value="Envoyer">
  </form>
  ```

- ## Éléments sémantiques HTML5

  ```html
  <header>En-tête du document</header>
  <nav>Menu de navigation</nav>
  <main>Contenu principal</main>
  <article>Article indépendant</article>
  <section>Section du document</section>
  <footer>Pied de page</footer>
  ```

---

# 4. Attributs

Les attributs fournissent des informations supplémentaires sur les éléments HTML.

- ## Attributs globaux (applicables à tous les éléments)

  - `id` : Identifiant unique de l'élément.
  - `class` : Classe(s) de l'élément, utilisée(s) pour le styliser avec CSS.
  - `style` : Style en ligne de l'élément.
  - `title` : Informations supplémentaires affichées au survol.

  **Exemple :**

  ```html
  <p id="intro" class="texte-important" title="Introduction">Texte du paragraphe.</p>
  ```

- ## Attributs spécifiques

  - Pour `<a>` : `href`, `target`, `rel`.
  - Pour `<img>` : `src`, `alt`, `width`, `height`.

---

# 5. Sémantique et accessibilité

Utiliser des balises sémantiques améliore l'accessibilité et le référencement (SEO) de votre site.

- **Balises sémantiques** : `<header>`, `<footer>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`, etc.
- **Bonne pratique** : Éviter d'utiliser des divs à outrance (`<div>`) et préférer les éléments sémantiques appropriés.

---

# 6. Nouveautés de HTML5

- ## Éléments multimédias

  - **Audio :**

    ```html
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Votre navigateur ne supporte pas la balise audio.
    </audio>
    ```

  - **Vidéo :**

    ```html
    <video width="320" height="240" controls>
        <source src="video.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la balise vidéo.
    </video>
    ```

  - **Canvas :**

    ```html
    <canvas id="monCanvas" width="200" height="100"></canvas>
    ```

- ## Nouveaux types de champs de formulaire

  - `email`, `date`, `color`, `range`, `number`, etc.

    **Exemple :**

    ```html
    <input type="email" name="email" placeholder="Entrez votre email">
    ```

- ## Attributs de validation

  - `required`, `pattern`, `min`, `max`, etc.

    **Exemple :**

    ```html
    <input type="number" name="quantite" min="1" max="10" required>
    ```

---

# 7. Éléments en ligne vs. éléments de bloc

- **Éléments de bloc** : Occupe tout l'espace horizontal disponible et commence sur une nouvelle ligne. Exemple : `<div>`, `<p>`, `<h1>`.

- **Éléments en ligne** : N'interrompt pas le flux du texte. Exemple : `<span>`, `<a>`, `<img>`.

---

# 8. Métadonnées

Les métadonnées fournissent des informations sur le document au navigateur et aux moteurs de recherche.

- **Balises meta**

  ```html
  <meta charset="UTF-8">
  <meta name="description" content="Description de la page">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```


---

# 9. Inclusion de ressources externes

- **Feuilles de style CSS**

  ```html
  <link rel="stylesheet" href="styles.css">
  ```

- **Scripts JavaScript**

  - En tête :

    ```html
    <script src="script.js"></script>
    ```

  - Avant la fermeture du `</body>` pour un chargement plus rapide :

    ```html
    <!-- Contenu du body -->
    <script src="script.js"></script>
    </body>
    </html>
    ```

---

# 10. Bonnes pratiques

- **Indentation et lisibilité** : Utilisez une indentation cohérente pour améliorer la lisibilité du code.
- **Commentaires** : Utilisez des commentaires pour expliquer des sections de code.

  ```html
  <!-- Ceci est un commentaire HTML -->
  ```

- **Nesting correct des éléments** : Assurez-vous que les balises sont correctement imbriquées.

  ```html
  <ul>
      <li>Élément de liste</li>
  </ul>
  ```

- **Utilisation de l'attribut alt pour les images** : Important pour l'accessibilité.
- **Validation du code** : Utilisez des validateurs comme le W3C Validator pour vérifier la conformité de votre code.

---

# 11. Caractères spéciaux et entités HTML

Pour afficher des caractères spéciaux :

- `&copy;` pour ©
- `&eacute;` pour é
- `&lt;` pour <
- `&gt;` pour >
- `&amp;` pour &

---

# 12. Liens et ancrages

- **Lien vers une autre page**

  ```html
  <a href="page2.html">Aller à la page 2</a>
  ```

- **Lien vers une section de la même page**

  ```html
  <a href="#section1">Aller à la section 1</a>
  <!-- Plus bas dans la page -->
  <h2 id="section1">Section 1</h2>
  ```

---

# 13. Iframes

Permet d'intégrer une autre page web dans la page actuelle.

```html
<iframe src="https://www.exemple.com" width="600" height="400"></iframe>
```

---

# 14. Attributs de données personnalisées

Les attributs `data-*` permettent de stocker des données personnalisées sur les éléments HTML.

**Exemple :**

```html
<div id="produit1" data-nom="Chaussures" data-prix="49.99">...</div>
```

---

# 15. Optimisation pour le référencement (SEO)

- **Utiliser des titres appropriés** : `<h1>` pour le titre principal, `<h2>` à `<h6>` pour les sous-titres.
- **Balises meta description** : Aident les moteurs de recherche à comprendre le contenu de la page.
- **URL propres et significatives** : Facilite la compréhension du contenu par les utilisateurs et les moteurs de recherche.

---

# Conclusion

Maîtriser les notions principales de HTML est essentiel pour créer des pages web structurées et accessibles. N'hésitez pas à consulter la documentation officielle et à pratiquer en créant vos propres pages pour approfondir vos connaissances.

