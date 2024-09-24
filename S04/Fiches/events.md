
# Fiche Récapitulative : Les Événements en JavaScript

## 1. Qu'est-ce qu'un événement ?
Un événement en JavaScript est une action ou une occurrence qui se produit dans le navigateur et que JavaScript peut intercepter et gérer. Les exemples d'événements incluent les clics de souris, les frappes au clavier, le chargement de pages, etc.

## 2. Les types d'événements courants :
### Événements de souris :
- `click` : Se produit lorsqu'un élément est cliqué.
- `dblclick` : Se produit lorsqu'un élément est double-cliqué.
- `mouseover` : Se produit lorsqu'une souris survole un élément.
- `mouseout` : Se produit lorsque la souris quitte un élément.
- `mousemove` : Se produit lorsqu'une souris se déplace sur un élément.
- `mousedown` / `mouseup` : Se produit lorsqu'un bouton de la souris est enfoncé / relâché.

### Événements de clavier :
- `keydown` : Se produit lorsqu'une touche est enfoncée.
- `keyup` : Se produit lorsqu'une touche est relâchée.
- `keypress` : Se produit lorsqu'une touche est enfoncée et relâchée (déprécié, utilisez `keydown`/`keyup`).

### Événements de formulaire :
- `submit` : Se produit lorsqu'un formulaire est soumis.
- `change` : Se produit lorsque la valeur d'un élément `<input>`, `<select>`, ou `<textarea>` change.
- `input` : Se produit après chaque modification de la valeur d'un `<input>`.
- `focus` / `blur` : Se produit lorsqu'un élément gagne / perd le focus.

### Événements de fenêtre :
- `load` : Se produit lorsque la page est entièrement chargée.
- `resize` : Se produit lorsque la fenêtre est redimensionnée.
- `scroll` : Se produit lorsque l'utilisateur fait défiler la page.
- `unload` : Se produit lorsque l'utilisateur quitte la page (ne fonctionne pas dans tous les navigateurs modernes).

## 3. Gestionnaire d'événements :
### Ajouter un événement avec `addEventListener`:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

### Retirer un événement avec `removeEventListener`:
```javascript
function handleClick() {
    alert('Button clicked!');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

## 4. Propagation des événements :
### Propagation (Bubbling) :
Un événement se déclenche d'abord sur l'élément cible, puis monte (ou "bubble") à travers les ancêtres (par défaut).

### Capturing (Capturing phase) :
L'événement est capturé par les ancêtres d'abord, puis descend jusqu'à l'élément cible.

### Arrêter la propagation :
- `event.stopPropagation()` : Empêche l'événement de se propager vers les éléments parents.
- `event.stopImmediatePropagation()` : Arrête la propagation et empêche d'autres gestionnaires d'être appelés sur l'élément actuel.

## 5. L'objet Event :
L'objet `Event` est automatiquement passé aux gestionnaires d'événements et contient des informations sur l'événement déclenché.
- **`event.type`** : Type de l'événement (par exemple, `click`, `keydown`).
- **`event.target`** : L'élément qui a déclenché l'événement.
- **`event.currentTarget`** : L'élément sur lequel le gestionnaire est attaché.
- **`event.preventDefault()`** : Empêche le comportement par défaut de l'événement (par exemple, empêcher la soumission d'un formulaire).
- **`event.stopPropagation()`** : Empêche la propagation de l'événement vers les éléments parents.

## 6. Délégation d'événements :
Technique consistant à attacher un seul gestionnaire d'événements à un parent commun plutôt qu'à plusieurs éléments enfants. Utile pour gérer les événements dynamiques.

```javascript
document.querySelector('ul').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        alert('List item clicked!');
    }
});
```

## 7. Événements personnalisés :
Vous pouvez créer et déclencher des événements personnalisés avec le constructeur `CustomEvent`.

```javascript
const customEvent = new CustomEvent('myEvent', {
    detail: { someKey: 'someValue' }
});
element.dispatchEvent(customEvent);

element.addEventListener('myEvent', function(event) {
    console.log(event.detail.someKey); // 'someValue'
});
```

## 8. Compatibilité et bonnes pratiques :
- Utiliser `addEventListener` pour ajouter des événements afin de pouvoir ajouter plusieurs gestionnaires et bénéficier de la phase de capture.
- Toujours vérifier la compatibilité des événements avec les différents navigateurs (surtout pour les anciens navigateurs).
- Garder les gestionnaires d'événements concis et éviter de faire des opérations lourdes à l'intérieur (exemple : boucle intensive).

