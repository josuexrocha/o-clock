
# Fiche récapitulative sur les notions HTML et CSS

## HTML - Structuration et sémantique

Le **HTML (HyperText Markup Language)** est un langage de balisage qui permet de structurer le contenu d'une page web. Il est utilisé pour décrire le fond (le contenu), tandis que le CSS est utilisé pour la présentation (la forme). Chaque élément est défini par des balises.

### Balises HTML essentielles
- **h1 à h6** : Utilisées pour les titres et sous-titres, avec une hiérarchie allant de **h1** (le plus important) à **h6** (le moins important).

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
```

- **p** : Définit un paragraphe de texte.

```html
<p>Ceci est un paragraphe de texte.</p>
```

- **ul** et **ol** : Balises pour créer des listes non ordonnées (**ul**) ou ordonnées (**ol**), avec des éléments de liste définis par **li**.

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
```

- **a** : Crée des liens hypertexte avec l'attribut **href** pour spécifier l'URL cible.

```html
<a href="https://example.com">Lien vers un site</a>
```

- **strong** et **em** : Permettent de mettre en valeur du texte, **strong** pour un contenu important (souvent en gras) et **em** pour un texte mis en emphase (souvent en italique).

```html
<strong>Texte important</strong>
<em>Texte en emphase</em>
```

### Structure de base d'une page HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma page</title>
</head>
<body>
  <h1>Bienvenue sur ma page</h1>
  <p>Ceci est une page exemple.</p>
</body>
</html>
```

### Sémantique HTML
Le HTML sémantique permet d'améliorer l'accessibilité et le référencement. Par exemple, l'utilisation de balises comme **header**, **footer**, **article** et **section** permet de mieux structurer la page pour les moteurs de recherche et les utilisateurs ayant des handicaps visuels.

---

## CSS - Stylisation et présentation

Le **CSS (Cascading Style Sheets)** est utilisé pour la mise en forme des pages HTML. Il permet de contrôler l'apparence visuelle des éléments : couleur, taille, marges, espacement, etc.

### Syntaxe CSS
Une règle CSS se compose d'un sélecteur, d'une propriété et d'une valeur.

```css
sélecteur {
  propriété: valeur;
}
```

Exemple :
```css
p {
  color: blue;
  font-size: 16px;
}
```
Ici, tous les éléments **p** auront du texte bleu avec une taille de 16px.

### Méthodes d'intégration du CSS
1. **Inline** : Directement dans les balises HTML avec l'attribut **style**.
```html
<p style="color: red;">Texte rouge</p>
```

2. **Interne** : Dans une balise `<style>` dans le fichier HTML.
```html
<style>
  p { color: red; }
</style>
```

3. **Externe** : Utilisation d'un fichier CSS externe lié avec la balise `<link>`.
```html
<link rel="stylesheet" href="styles.css">
```

### Propriétés CSS essentielles

- **Couleur du texte** :
```css
p {
  color: blue;
}
```

- **Taille du texte** :
```css
h1 {
  font-size: 32px;
}
```

- **Fond (background-color)** :
```css
div {
  background-color: yellow;
}
```

- **Espacement (marges et padding)** :
  - **padding** : Espace intérieur entre le contenu et la bordure.
  - **margin** : Espace extérieur entre la bordure et les éléments voisins.

```css
div {
  padding: 20px;
  margin: 10px;
}
```

### Sélecteurs CSS
- **Sélecteurs par type** (sélectionne tous les éléments d'un certain type, ex: `p` pour les paragraphes).
- **Sélecteurs par classe** (sélectionne les éléments ayant une certaine classe, ex: `.classe`).
- **Sélecteurs par ID** (sélectionne l'élément ayant un certain ID, ex: `#id`).
- **Pseudo-classes** : Sélecteurs qui s'appliquent selon l'état de l'élément, par exemple `:hover` pour appliquer un style lorsqu'un élément est survolé.

Exemple de pseudo-classe :
```css
a:hover {
  color: red;
}
```

### Les unités en CSS
- **px** : Pixels, pour des tailles fixes.
- **em/rem** : Unitée relative à la taille de la police parente ou racine.
- **%** : Pourcentage relatif à la taille de l'élément parent.

### Modèle de boîte CSS (box model)
Chaque élément est contenu dans une "boîte" qui se compose de :
1. **Content** : Le contenu de l'élément (texte, images, etc.).
2. **Padding** : Espace entre le contenu et la bordure.
3. **Border** : Bordure autour de l'élément.
4. **Margin** : Espace entre la bordure et les éléments voisins.

---

## Concepts avancés

### Pseudo-éléments
Ils permettent de cibler une partie spécifique d'un élément. Exemple avec **::before** et **::after** pour ajouter du contenu avant ou après un élément.
```css
p::before {
  content: 'Début : ';
}
p::after {
  content: ' Fin.';
}
```

### Transitions et animations
Les transitions permettent de créer des effets d'animation entre deux états CSS.
```css
a {
  transition: color 0.3s ease;
}
a:hover {
  color: red;
}
```

Les animations peuvent être définies avec **@keyframes**.
```css
@keyframes changeColor {
  from { background-color: blue; }
  to { background-color: green; }
}
```

---

## Conclusion

Cette fiche offre un aperçu des bases essentielles du HTML et CSS pour structurer et styliser une page web. Le HTML permet de définir la sémantique et l'organisation du contenu, tandis que le CSS apporte une flexibilité totale dans la présentation visuelle.
