
# Layout

## 1. Introduction aux balises sémantiques : `<aside>` et `<article>`

### Balise `<aside>`
- Représente un contenu secondaire, souvent utilisé pour des blocs d'informations connexes ou des publicités.
- Elle est souvent placée à côté du contenu principal, comme une barre latérale ou des encarts supplémentaires.

### Balise `<article>`
- Utilisée pour des unités de contenu indépendantes telles que des articles de blog, des posts ou des commentaires.
- Représente un contenu autonome qui peut être distribué indépendamment ou réutilisé dans d'autres contextes.

Exemple de structure :
```html
<article>
  <h2>Un titre d'article</h2>
  <p>Voici le contenu principal de l'article...</p>
</article>

<aside>
  <p>Informations supplémentaires, publicités, ou liens connexes.</p>
</aside>
```

---

## 2. Mettre des éléments les uns à côté des autres

### Utiliser `display: inline-block`
- Alignement horizontal des éléments tout en gardant les propriétés des éléments block, comme la gestion de la taille.
- Utile pour des petits éléments comme des boutons, des images ou des cartes (cards).

Exemple :
```css
.inline-block-element {
  display: inline-block;
  width: 150px;
  height: 100px;
  margin-right: 15px;
}
```

**Avantages :**
- Facile à utiliser pour des petits éléments simples.
- Compatible avec la plupart des navigateurs.

**Inconvénients :**
- Crée parfois des espaces indésirables entre les éléments, souvent dus aux sauts de ligne dans le HTML.

---

### Utiliser `display: flex`

**Flexbox** est la méthode moderne et puissante pour réaliser des layouts flexibles. Elle permet d'aligner, de distribuer l'espace et de réorganiser des éléments dans un conteneur, que ce soit en ligne ou en colonne.

#### Principes de base de Flexbox
1. **Conteneur Flex** : Tout conteneur avec `display: flex` devient un conteneur flexible, et les éléments enfants à l'intérieur deviennent des éléments flexibles.
2. **Axe principal et secondaire** : Flexbox organise les éléments le long d'un **axe principal** (par défaut horizontal) et d'un **axe secondaire** (perpendiculaire à l'axe principal).

#### Propriétés du conteneur flex :
- `flex-direction`: Définit la direction de l'axe principal (ex. `row`, `column`, `row-reverse`, `column-reverse`).
- `justify-content`: Aligne les éléments le long de l'axe principal.
- `align-items`: Aligne les éléments le long de l'axe secondaire (perpendiculaire).
- `flex-wrap`: Contrôle si les éléments doivent s'étendre sur plusieurs lignes ou rester sur une seule.

#### Propriétés des éléments flex :
- `order`: Change l'ordre des éléments dans le conteneur sans toucher au HTML.
- `flex-grow`: Définit la capacité d'un élément à s'étendre pour occuper plus d'espace.
- `flex-shrink`: Définit si un élément peut rétrécir si nécessaire.
- `flex-basis`: Taille de base de l'élément avant l'application de l'expansion ou du rétrécissement.

#### Exemple d'utilisation de Flexbox :
```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex-grow: 1;
  margin: 10px;
}
```

**Ressources complémentaires** :
- [MDN : Concepts de base de Flexbox](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS Tricks : Guide Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## 3. Notions importantes du jour

### Box Model et Positionnement
- La base de tout layout CSS repose sur le **Box Model**, qui définit comment chaque élément HTML est représenté visuellement avec ses dimensions, marges, bordures et padding.
- Le **positionnement** (relative, absolute, fixed) permet de contrôler plus précisément l'emplacement d'un élément par rapport à son conteneur ou à la fenêtre de visualisation.

### `inline-block` vs. `flex`
- **`inline-block`** est simple et utile pour de petits éléments côte à côte, mais devient difficile à gérer pour des layouts complexes.
- **Flexbox** est idéal pour des dispositions plus complexes, offrant flexibilité, responsivité et un contrôle précis de l'alignement des éléments.

### Layouts Responsives
- Flexbox facilite la création de **layouts responsives** sans avoir besoin de recourir à des techniques comme les floats.
- L'utilisation des media queries en complément permet de créer des sites qui s'adaptent à toutes les tailles d'écran.

---

## 4. Ressources supplémentaires

- [MDN : Introduction au positionnement CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Learn CSS Layout](https://fr.learnlayout.com/toc.html) : Une ressource complète pour maîtriser les mises en page CSS.

---

Cette fiche résume les concepts clés de **layout** et de **Flexbox**, tout en incluant des astuces pratiques pour appliquer ces notions efficacement dans vos projets web. Utilisez Flexbox pour créer des mises en page modernes, responsives, et faciles à gérer !
