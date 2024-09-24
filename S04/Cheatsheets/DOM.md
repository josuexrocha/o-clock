# Cheatsheet DOM Manipulation - Récapitulatif

## 1. Sélection d'éléments
- Par ID : `document.getElementById('id')`
- Par classe : `document.getElementsByClassName('class')`
- Par tag : `document.getElementsByTagName('tag')`
- Sélecteur CSS : `document.querySelector('.class')`, `document.querySelectorAll('tag')`

## 2. Création et modification
- Créer : `document.createElement('div')`
- Cloner : `element.cloneNode(true)`
- Texte : `element.textContent = 'texte'`
- HTML : `element.innerHTML = '<span>HTML</span>'`

## 3. Attributs et classes
- Attributs : `setAttribute()`, `getAttribute()`, `removeAttribute()`
- Classes : `classList.add()`, `remove()`, `toggle()`, `contains()`

## 4. Structure du DOM
- Ajouter : `parentElement.appendChild(childElement)`
- Supprimer : `parentElement.removeChild(childElement)`
- Remplacer : `parentElement.replaceChild(newChild, oldChild)`
- Insérer : `element.insertBefore(newElement, referenceElement)`

## 5. Navigation
- Parent : `element.parentNode`
- Enfants : `element.children`, `firstElementChild`, `lastElementChild`
- Frères : `nextElementSibling`, `previousElementSibling`

## 6. Événements
- Ajouter : `element.addEventListener('event', function)`
- Supprimer : `element.removeEventListener('event', function)`

## 7. Style et dimensions
- Style : `element.style.property = 'value'`
- Dimensions : `element.getBoundingClientRect()`

## 8. Formulaires
- Éléments : `form.elements`
- Valeur : `input.value`
- Validation : `form.checkValidity()`

## 9. Avancé
- Fragments : `document.createDocumentFragment()`
- Observateurs : `MutationObserver`, `IntersectionObserver`
- SVG/Canvas : `createElementNS()`, `canvas.getContext('2d')`