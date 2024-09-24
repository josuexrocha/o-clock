
# 1. Introduction au CSS

## Qu'est-ce que le CSS ?
- CSS (Cascading Style Sheets) est un langage utilisé pour décrire la présentation d'un document écrit en HTML ou XML.
- Le CSS permet de séparer le contenu du document de sa présentation, en définissant le style des éléments de manière indépendante du code HTML.

## Comment le CSS fonctionne avec HTML
- Le CSS fonctionne en appliquant des règles de style à des éléments HTML. Ces règles peuvent être définies directement dans l'élément (CSS en ligne), dans l'en-tête du document (CSS interne), ou dans un fichier séparé (CSS externe).
- **Cascade** : Les styles sont appliqués en cascade, c'est-à-dire que les règles de style les plus spécifiques priment sur les règles plus générales.
- **Spécificité** : Le calcul de spécificité détermine quelles règles s'appliquent quand plusieurs règles ciblent le même élément.
- **Héritage** : Certains styles sont hérités des éléments parents (ex : couleur du texte).

---

# 2. Les méthodes d'intégration du CSS

## CSS en ligne (inline CSS)
- L'attribut `style` permet d'ajouter du CSS directement dans les balises HTML.
- **Avantages** : Pratique pour des ajustements rapides ou pour des styles uniques.
- **Inconvénients** : Rend le code HTML moins lisible et réutilisable.

  **Exemple :**
  ```html
  <p style="color: red; font-size: 16px;">Texte en rouge avec une taille de 16px</p>
  ```

## CSS interne (embedded CSS)
- Le CSS interne est placé dans une balise `<style>` dans l'en-tête `<head>` du document HTML.
- **Avantages** : Utile pour des pages avec des styles uniques ou des prototypes rapides.
- **Inconvénients** : Moins efficace pour la maintenance et le réutilisable à travers plusieurs pages.

  **Exemple :**
  ```html
  <head>
    <style>
      p {
        color: blue;
        font-size: 14px;
      }
    </style>
  </head>
  ```

## CSS externe (external CSS)
- Le CSS externe est écrit dans un fichier séparé avec l'extension `.css`, qui est lié à l'HTML via une balise `<link>`.
- **Avantages** : Facilite la maintenance, permet de réutiliser les styles sur plusieurs pages, améliore la performance.
- **Inconvénients** : Nécessite des requêtes HTTP supplémentaires pour charger le fichier CSS.

  **Exemple :**
  ```html
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  ```

---

# 3. Sélecteurs CSS

## Sélecteurs simples
- **Sélecteurs d'éléments** : Cible les éléments HTML par leur nom (ex : `div`, `p`, `h1`).
  ```css
  p {
    color: green;
  }
  ```

- **Sélecteurs de classes** : Cible les éléments ayant une certaine classe, préfixée par un point (`.`).
  ```css
  .classe {
    font-size: 18px;
  }
  ```

- **Sélecteurs d'identifiants** : Cible un élément spécifique avec un identifiant unique, préfixé par un dièse (`#`).
  ```css
  #idUnique {
    background-color: yellow;
  }
  ```

## Sélecteurs combinés et complexes
- **Sélecteurs descendants** : Cible les éléments descendants d'un autre élément.
  ```css
  div p {
    color: purple;
  }
  ```

- **Sélecteurs d'enfants directs** : Cible les éléments enfants directs d'un autre élément.
  ```css
  div > p {
    color: orange;
  }
  ```

- **Sélecteurs adjacents** : Cible l'élément immédiatement après un autre élément.
  ```css
  h1 + p {
    margin-top: 0;
  }
  ```

- **Sélecteurs généraux de frères** : Cible tous les frères suivants un élément.
  ```css
  h1 ~ p {
    color: grey;
  }
  ```

## Sélecteurs d'attributs
- Cible les éléments en fonction de leurs attributs.
  ```css
  input[type="text"] {
    border: 1px solid #ccc;
  }
  ```

- Sélecteurs avancés :
  - `[attr^="value"]` : commence par
  - `[attr$="value"]` : termine par
  - `[attr*="value"]` : contient

## Pseudo-classes
- **Ciblage des éléments en fonction de leur état** :
  - `:hover` : lorsqu'un utilisateur survole un élément
  - `:focus` : lorsque l'élément a le focus
  - `:active` : lorsqu'un élément est activé

  ```css
  a:hover {
    color: red;
  }
  ```

- **Ciblage des éléments spécifiques** :
  - `:first-child`, `:last-child` : premier ou dernier enfant
  - `:nth-child(n)` : en fonction de la position dans le parent

  ```css
  p:first-child {
    font-weight: bold;
  }
  ```

## Pseudo-éléments
- **Styliser une partie d'un élément** :
  - `::before`, `::after` : insère du contenu avant ou après l'élément

  ```css
  .classe::before {
    content: "• ";
    color: blue;
  }
  ```

- **Utilisation pour les effets de style avancés** :
  - `::first-line`, `::first-letter` : styliser la première ligne ou la première lettre

---

# 4. Propriétés CSS courantes

## Mise en page
- **display** : contrôle l'affichage des éléments.
  - `block`, `inline`, `inline-block`, `none`, `flex`, `grid`

  ```css
  div {
    display: flex;
  }
  ```

- **position** : définit la position d'un élément par rapport à son parent ou au viewport.
  - `static`, `relative`, `absolute`, `fixed`, `sticky`

  ```css
  .element {
    position: absolute;
    top: 50px;
    left: 100px;
  }
  ```

- **float** et **clear** : anciennement utilisés pour créer des mises en page en colonnes.
  - `float` : `left`, `right`, `none`
  - `clear` : `left`, `right`, `both`

  ```css
  .image {
    float: left;
    margin-right: 20px;
  }
  ```

- **z-index** : contrôle la superposition des éléments positionnés.

  ```css
  .overlay {
    position: absolute;
    z-index: 10;
  }
  ```

## Couleurs et arrière-plans
- **color** : définit la couleur du texte.

  ```css
  p {
    color: #333;
  }
  ```

- **background-color** : couleur de fond.

  ```css
  div {
    background-color: #f0f0f0;
  }
  ```

- **background-image** : image de fond.

  ```css
  body {
    background-image: url('image.jpg');
  }
  ```

- **background-repeat**, **background-size**, **background-position** : personnalisation des arrière-plans.

  ```css
  .header {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  ```

## Typographie
- **font-family** : choix des polices.

  ```css
  body {
    font-family: Arial, sans-serif;
  }
  ```

- **font-size** : taille du texte.

  ```css
  h1 {
    font-size: 24px;
  }
  ```

- **font-weight**, **font-style** : gras, italique.

  ```css
  p {
    font-weight: bold;
    font-style: italic;
  }
  ```

- **line-height** : interlignage.

  ```css
  p {
    line-height: 1.5;
  }
  ```

- **text-align**, **text-decoration**, **text-transform** : alignement et transformation du texte.

  ```css
  h2 {
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
  }
  ```

## Espacement et bordures
- **margin** : marges extérieures.

  ```css
  .container {
    margin: 20px auto;
  }
  ```

- **padding** : espaces intérieurs.

  ```css
  .box {
    padding: 10px 15px;
  }
  ```

- **border** : bordures, styles de bordures, et rayons de bordure (`border-radius`).

  ```css
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  ```

## Boîte et taille
- **width**, **height**, **max-width**, **min-height** : dimensions des éléments.

  ```css
  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
  ```

- **box-sizing** : `content-box` vs `border-box`.

  ```css
  * {
    box-sizing: border-box;
  }
  ```

- **overflow** : gestion du contenu débordant.

  ```css
  .scrollable {
    overflow: auto;
  }
  ```

---

# 5. Modèle de boîte (box model)

## Comprendre le modèle de boîte CSS
- Le modèle de boîte CSS est la façon dont le navigateur calcule la taille des éléments.
- **Éléments du modèle de boîte** :
  - **Margin** : l'espace extérieur autour de l'élément.
  - **Border** : la bordure autour de l'élément.
  - **Padding** : l'espace intérieur entre le contenu et la bordure.
  - **Content** : l'espace occupé par le contenu de l'élément.

  **Exemple visuel :**
  ```
  +----------------------------+
  |         margin              |
  |  +-----------------------+  |
  |  |        border          |  |
  |  |  +-------------------+|  |
  |  |  |     padding        ||  |
  |  |  |  +--------------+ ||  |
  |  |  |  |   content    | ||  |
  |  |  |  +--------------+ ||  |
  |  |  +-------------------+|  |
  |  +-----------------------+  |
  +----------------------------+
  ```

## Box-sizing
- **`content-box`** : par défaut, la taille d'un élément (`width`, `height`) inclut uniquement le contenu, sans les `padding` ou `border`.
- **`border-box`** : la taille inclut les `padding` et `border`, ce qui simplifie le calcul des dimensions.
  
  ```css
  * {
    box-sizing: border-box;
  }
  ```

---

# 6. Flexbox

## Introduction à Flexbox
- Flexbox est un modèle de mise en page unidimensionnel qui permet d'aligner et de distribuer l'espace entre les éléments d'un conteneur.
- Flexbox est particulièrement utile pour créer des mises en page fluides et centrées, sans utiliser de `float` ou de `position`.

## Propriétés du conteneur flex
- **`display: flex`** : active le modèle Flexbox pour un conteneur.
- **`flex-direction`** : définit la direction des éléments (`row`, `row-reverse`, `column`, `column-reverse`).
- **`justify-content`** : contrôle l'alignement des éléments sur l'axe principal (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`).
- **`align-items`** : contrôle l'alignement des éléments sur l'axe transversal (`flex-start`, `flex-end`, `center`, `stretch`).
- **`flex-wrap`** : contrôle le comportement des éléments lorsque l'espace est insuffisant (`nowrap`, `wrap`, `wrap-reverse`).

  ```css
  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  ```

## Propriétés des éléments flex
- **`flex-grow`** : contrôle la capacité d'un élément à grandir par rapport aux autres éléments flexibles.
- **`flex-shrink`** : contrôle la capacité d'un élément à rétrécir par rapport aux autres éléments flexibles.
- **`flex-basis`** : définit la taille de base d'un élément avant que l'espace restant ne soit distribué.

  ```css
  .flex-item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100px;
  }
  ```

- **`align-self`** : contrôle l'alignement d'un élément spécifique le long de l'axe transversal, remplaçant l'alignement défini par `align-items`.

  ```css
  .flex-item {
    align-self: flex-end;
  }
  ```

---

# 7. CSS Grid

## Introduction à CSS Grid
- CSS Grid est un système de mise en page bidimensionnel qui permet de créer des grilles complexes avec des lignes et des colonnes.
- Contrairement à Flexbox, qui gère l'alignement sur un axe (horizontal ou vertical), CSS Grid permet de gérer les deux axes simultanément.

## Propriétés du conteneur grid
- **`display: grid`** : active le modèle Grid pour un conteneur.
- **`grid-template-columns`** et **`grid-template-rows`** : définissent la taille des colonnes et des lignes de la grille.

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 100px;
  }
  ```

- **`grid-gap`**, **`row-gap`**, **`column-gap`** : contrôlent l'espacement entre les éléments de la grille.

  ```css
  .grid-container {
    grid-gap: 10px;
  }
  ```

## Propriétés des éléments grid
- **`grid-column`** et **`grid-row`** : permettent de positionner les éléments dans la grille en définissant la ligne ou la colonne où ils commencent et se terminent.

  ```css
  .grid-item {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  ```

- **`grid-area`** : permet de nommer des zones dans la grille et de les positionner à l'aide des noms définis.

  ```css
  .grid-container {
    grid-template-areas: "header header"
                         "sidebar content";
  }

  .header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;
  }
  ```

---

# 8. Responsiveness et Media Queries

## Introduction aux media queries
- Les media queries permettent d'adapter le style des éléments en fonction de la taille de l'écran ou d'autres caractéristiques du dispositif (résolution, orientation).
- **Syntaxe de base :**

  ```css
  @media (max-width: 768px) {
    body {
      background-color: lightblue;
    }
  }
  ```

## Mise en page responsive
- **Techniques de design réactif :**
  - Utilisation de `flex`, `grid`, et `max-width` pour créer des mises en page adaptatives.
  - Adaptation des polices, marges, et autres propriétés en fonction des points de rupture (breakpoints).

- **Points de rupture (breakpoints) :**
  - Les breakpoints sont des largeurs d'écran où la mise en page change pour s'adapter à différents dispositifs (mobile, tablette, desktop).

  ```css
  @media (min-width: 1024px) {
    .container {
      width: 960px;
    }
  }
  ```

## Unités relatives et absolues
- **Unités relatives :** 
  - `em`, `rem`, `%` : ces unités sont proportionnelles à d'autres valeurs (police parent, taille de la fenêtre, etc.).
  
- **Unités absolues :** 
  - `px`, `pt`, `cm` : ces unités sont fixes et ne dépendent pas de la taille du conteneur ou de la fenêtre.

---

# 9. Transitions et animations

## Transitions CSS
- Les transitions permettent d'ajouter des effets de transition entre les états d'un élément.
- **Syntaxe de base :**

  ```css
  .button {
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #555;
  }
  ```

## Animations CSS
- Les animations permettent de créer des mouvements complexes en utilisant des images clés définies avec `@keyframes`.
- **Syntaxe de base :**

  ```css
  @keyframes slidein {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .slide {
    animation: slidein 2s forwards;
  }
  ```

## Transformations
- Les transformations permettent de manipuler la position, la rotation, l'échelle, et d'autres propriétés d'un élément.
- **Propriétés courantes :**

  ```css
  .rotate {
    transform: rotate(45deg);
  }

  .scale {
    transform: scale(1.5);
  }

  .translate {
    transform: translateX(50px);
  }
  ```

---

# 10. Bonnes pratiques et accessibilité

## Variables CSS (`var()`)
- Les variables CSS permettent de stocker des valeurs réutilisables tout au long du document.
- **Syntaxe :**

  ```css
  :root {
    --main-color: #3498db;
    --padding: 10px;
  }

  .box {
    color: var(--main-color);
    padding: var(--padding);
  }
  ```

## Préprocesseurs CSS
- **Introduction à Sass et Less :**
  - Ces outils permettent d'ajouter des fonctionnalités avancées au CSS, comme les variables, les mixins, et les fonctions, pour rendre le CSS plus modulable et maintenable.

## Accessibilité
- **Rendre les sites accessibles via des techniques CSS :**
  - Utilisation de couleurs contrastées pour le texte et les éléments interactifs.
  - Mise en évidence des éléments focusables pour les utilisateurs naviguant au clavier.
  - **Exemple :**

    ```css
    a:focus {
      outline: 2px solid #005fcc;
    }
    ```
---

# Conclusion
Maîtriser les notions principales de CSS est essentiel pour créer des sites web modernes, réactifs et accessibles. Continuez à expérimenter avec ces concepts, et n'oubliez pas de tester régulièrement vos designs sur différents dispositifs pour garantir une bonne expérience utilisateur.
