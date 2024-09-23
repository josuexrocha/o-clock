
# Box Model, structuration sémantique, et propriétés CSS avancées

## 1. Le Box Model (Modèle de Boîte)

Le Box Model est une notion fondamentale en CSS pour comprendre la manière dont chaque élément HTML est représenté visuellement sur une page web. Il décompose chaque élément en plusieurs couches, permettant de définir l'espace que l'élément occupe.

### Les composantes du Box Model :
- **Content** : Le contenu réel de l'élément (texte, images, etc.).
- **Padding (Marge intérieure)** : Espace entre le contenu et la bordure.
- **Border (Bordure)** : La ligne entourant l'élément.
- **Margin (Marge extérieure)** : Espace entre la bordure et les autres éléments environnants.

### Propriétés CSS liées au Box Model :
- `width` et `height` : Définissent la largeur et la hauteur de l'élément.
- `padding` : Définit l'espacement intérieur entre le contenu et la bordure.
- `border` : Spécifie la bordure qui entoure l'élément.
- `margin` : Définit l'espace autour de l'élément, créant un espacement entre celui-ci et les autres éléments.

### Exemple de code CSS avec Box Model :
```css
.mon-element {
  width: 300px;
  height: 150px;
  padding: 10px;
  border: 2px solid #000;
  margin: 20px;
  box-sizing: border-box;
}
```
L'ajout de `box-sizing: border-box;` permet d'inclure le padding et la border dans les dimensions de l'élément, ce qui évite de dépasser la taille définie.

Plus de détails : [MDN Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model).

---

## 2. Structurer sa page avec des balises sémantiques

L'utilisation de balises sémantiques est essentielle pour améliorer la clarté, l'accessibilité et le référencement naturel (SEO) des pages web. Ces balises permettent de structurer le contenu d'une manière compréhensible pour les moteurs de recherche et les utilisateurs, notamment ceux utilisant des lecteurs d'écran.

### Les balises sémantiques les plus courantes :
- `<header>` : Représente l'en-tête d'une section ou d'un document, généralement utilisé pour les titres et les liens de navigation.
- `<nav>` : Définit une zone de navigation contenant des liens vers d'autres sections de la page ou du site.
- `<main>` : Contient le contenu principal d'un document, unique sur chaque page.
- `<article>` : Utilisé pour des blocs de contenu indépendant, comme des articles de blog.
- `<section>` : Regroupe plusieurs éléments ayant une thématique similaire.
- `<aside>` : Contient des informations connexes au contenu principal, souvent utilisé pour des barres latérales ou des citations.
- `<footer>` : Représente le pied de page d'une section ou d'un document.

### Exemple de structure sémantique HTML :
```html
<main>
  <header>
    <h1>Blog Tech</h1>
    <nav>
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#articles">Articles</a></li>
      </ul>
    </nav>
  </header>

  <article>
    <header>
      <h2>Titre de l'article</h2>
    </header>
    <section>
      <p>Contenu de l'article...</p>
    </section>
    <footer>
      <p>Publié par John Doe</p>
    </footer>
  </article>

  <aside>
    <p>Publicité ou informations connexes.</p>
  </aside>

  <footer>
    <p>© 2024 Blog Tech</p>
  </footer>
</main>
```
Plus de détails : [MDN Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

---

## 3. Différence entre Block et Inline

### Contenu Block :
- Les éléments block prennent toute la largeur disponible et commencent sur une nouvelle ligne.
- Ils peuvent contenir d'autres éléments block ou inline.
- Par exemple : `<div>`, `<p>`, `<h1>` à `<h6>`.

### Contenu Inline :
- Les éléments inline n'occupent que la largeur nécessaire pour leur contenu.
- Ils ne commencent pas sur une nouvelle ligne et peuvent être placés à côté d'autres éléments inline.
- Par exemple : `<a>`, `<strong>`, `<em>`, `<img>`.

### Propriétés associées au mode display :
- `display: block` : Transforme un élément en block, prenant toute la largeur disponible.
- `display: inline` : Transforme un élément en inline, aligné avec d'autres éléments inline.
- `display: inline-block` : Combine les avantages des deux : un élément inline qui peut avoir des dimensions (width/height).

### Exemple :
```css
.block-element {
  display: block;
}

.inline-element {
  display: inline;
}

.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 50px;
}
```
Plus de détails : [MDN Block-level content](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) et [MDN Inline-level content](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).

---

## 4. Propriétés CSS supplémentaires

### Padding (Marge intérieure) :
Le `padding` ajoute de l'espace entre le contenu d'un élément et sa bordure.
```css
.mon-element {
  padding: 10px; /* Applique une marge intérieure de 10px */
}
```
Plus de détails : [MDN Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).

### Margin (Marge extérieure) :
La propriété `margin` crée un espace entre l'élément et les autres éléments.
```css
.mon-element {
  margin: 20px; /* Ajoute une marge de 20px autour de l'élément */
}
```
Plus de détails : [MDN Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).

### Border (Bordure) :
`border` permet de définir une bordure autour de l'élément.
```css
.mon-element {
  border: 2px solid blue; /* Bordure bleue de 2px */
}
```
Plus de détails : [MDN Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).

### Display :
La propriété `display` définit comment un élément est affiché (block, inline, etc.).
```css
.mon-element {
  display: flex; /* Utilise Flexbox pour la mise en page */
}
```

### Box-sizing :
Définit si le `padding` et la `border` sont inclus dans la largeur et la hauteur totales de l'élément.
```css
.mon-element {
  box-sizing: border-box; /* Inclut padding et border dans les dimensions */
}
```

---

## 5. Usage de l'élément `<img>`

L'élément `<img>` est essentiel pour intégrer des images dans une page web. Cependant, pour l'accessibilité et le référencement, plusieurs bonnes pratiques sont à suivre.

### Attributs importants :
- `src` : Chemin de l'image à afficher (URL relative ou absolue).
- `alt` : Texte alternatif affiché si l'image ne peut pas être chargée ou pour les utilisateurs utilisant un lecteur d'écran.
- `width` et `height` : Définissent les dimensions de l'image (en pixels).

### Exemple d'utilisation :
```html
<img src="images/photo.jpg" alt="Photo de la nature" width="500" height="300">
```

### Bonnes pratiques :
- Utilisez toujours l'attribut `alt` pour fournir une description de l'image.
- Optimisez les images pour réduire le temps de chargement des pages (formats comme `.webp`).

Plus de détails : [MDN img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

---

## 6. Techniques avancées pour le layout en CSS

### Flexbox :
Flexbox est une méthode moderne pour aligner et distribuer des éléments dans un conteneur, même lorsque la taille de celui-ci est inconnue.
```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
Flexbox permet une disposition fluide et flexible des éléments sans avoir à utiliser les anciens systèmes basés sur des grilles.

### Grid :
CSS Grid est une autre approche puissante pour le layout, permettant de diviser une page en grilles et de placer des éléments dans ces grilles avec précision.
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```
Grid est utile pour les dispositions complexes nécessitant plusieurs lignes et colonnes.

---

## Conclusion

Cette fiche vous offre un tour d'horizon complet du Box Model, de la structuration sémantique, des propriétés CSS essentielles, ainsi que des techniques avancées telles que Flexbox et CSS Grid. Ces connaissances vous permettront de construire des pages web structurées, accessibles et visuellement cohérentes.
