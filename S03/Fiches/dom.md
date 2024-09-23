
# Fiche Récapitulative JavaScript - DOM

## 1. Le DOM (Document Object Model)

### Définition
Le Document Object Model (DOM) est une interface de programmation (API) qui permet aux scripts de manipuler le contenu, la structure, et le style des documents HTML et XML. Le DOM représente le document sous forme d'un arbre de nodes, où chaque node correspond à une partie du document, comme un élément HTML, du texte, ou des attributs.

### L'objet `document`
L'objet `document` est l'entrée principale pour accéder et manipuler le contenu de la page web actuellement chargée. Il permet d'effectuer des opérations telles que la sélection, la création, la modification d'éléments, et bien plus encore.

## 2. Sélection d’Éléments dans le Document

### Méthodes pour sélectionner des éléments

- **`getElementById(id)`** : Récupère un élément du DOM par son attribut `id`.
  ```javascript
  const zoneContenu = document.getElementById('zone-contenu');
  zoneContenu.textContent = 'Nouveau contenu';
  ```

- **`querySelector(selector)`** : Récupère le premier élément correspondant au sélecteur CSS fourni.
  ```javascript
  const monContenu = document.querySelector('#mon-contenu');
  ```

- **`querySelectorAll(selector)`** : Récupère tous les éléments correspondants au sélecteur CSS sous forme d'une NodeList.
  ```javascript
  const paragraphes = document.querySelectorAll('p');
  paragraphes.forEach(p => p.style.color = 'blue');
  ```

- **`getElementsByClassName(className)`** : Récupère tous les éléments avec une certaine classe.
  ```javascript
  const elements = document.getElementsByClassName('ma-classe');
  ```

- **`getElementsByTagName(tagName)`** : Récupère tous les éléments d'un certain type (par exemple, tous les `div`).
  ```javascript
  const divs = document.getElementsByTagName('div');
  ```

## 3. Création d’Éléments

### Méthode `createElement`

- **`createElement(tagName)`** : Crée un nouvel élément HTML du type spécifié. L'élément créé n'est pas automatiquement ajouté à la page, il doit être inséré explicitement.
  ```javascript
  const listeItem = document.createElement('li');
  listeItem.textContent = 'Un contenu texte';
  ```

- **`createTextNode(text)`** : Crée un node de texte qui peut être inséré dans un élément.
  ```javascript
  const texte = document.createTextNode('Voici un texte');
  listeItem.appendChild(texte);
  ```

## 4. Ajout d’Éléments dans le Document

### Méthodes pour ajouter un nouvel élément

- **`appendChild()`** : Ajoute un élément en tant que dernier enfant d'un nœud parent.
  ```javascript
  const liste = document.getElementById('liste');
  liste.appendChild(listeItem);
  ```

- **`insertBefore(newElement, referenceElement)`** : Insère un nouvel élément avant un autre élément spécifié.
  ```javascript
  const premierElement = liste.firstElementChild;
  liste.insertBefore(nouveauElement, premierElement);
  ```

- **`replaceChild(newChild, oldChild)`** : Remplace un enfant existant d'un élément par un nouvel enfant.
  ```javascript
  liste.replaceChild(nouveauElement, ancienElement);
  ```

- **`removeChild(child)`** : Supprime un enfant d'un élément parent.
  ```javascript
  liste.removeChild(listeItem);
  ```

## 5. Manipulation du Style et des Classes

### Propriété `style`
- **`style`** : Permet de modifier les styles CSS d'un élément directement depuis le JavaScript.
  ```javascript
  monElement.style.color = '#F30';
  monElement.style.marginTop = '20px';
  ```

### Propriété `className`
- **`className`** : Permet de définir ou de récupérer la valeur de l'attribut `class` d'un élément.
  ```javascript
  monElement.className = 'nouvelle-classe';
  ```

### Propriété `classList`
- **`classList`** : Une propriété qui retourne la liste des classes d'un élément sous forme d'un objet `DOMTokenList`. Il possède plusieurs méthodes utiles :
  - **`add()`** : Ajoute une ou plusieurs classes.
    ```javascript
    monElement.classList.add('info', 'rouge');
    ```
  - **`remove()`** : Supprime une ou plusieurs classes.
    ```javascript
    monElement.classList.remove('rouge');
    ```
  - **`toggle()`** : Ajoute ou supprime une classe en fonction de sa présence.
    ```javascript
    monElement.classList.toggle('info');
    ```

## 6. Gestion des Événements

### Ajout d'événements

- **`addEventListener(event, function)`** : Attache un gestionnaire d'événements à un élément.
  ```javascript
  monElement.addEventListener('click', function() {
    alert('Élément cliqué!');
  });
  ```

### Suppression d'événements

- **`removeEventListener(event, function)`** : Supprime un gestionnaire d'événements attaché à un élément.
  ```javascript
  monElement.removeEventListener('click', function() {
    alert('Élément cliqué!');
  });
  ```

## 7. Autres Méthodes Utiles du DOM

- **`innerHTML`** : Définit ou récupère le contenu HTML d'un élément.
  ```javascript
  monElement.innerHTML = '<p>Nouveau contenu HTML</p>';
  ```

- **`textContent`** : Définit ou récupère le contenu textuel d'un élément, sans interpréter le HTML.
  ```javascript
  monElement.textContent = 'Nouveau contenu texte';
  ```

- **`setAttribute(name, value)`** : Ajoute un nouvel attribut ou modifie la valeur d'un attribut existant.
  ```javascript
  monElement.setAttribute('data-info', '1234');
  ```

- **`getAttribute(name)`** : Récupère la valeur d'un attribut spécifié.
  ```javascript
  const info = monElement.getAttribute('data-info');
  ```

- **`removeAttribute(name)`** : Supprime un attribut spécifié d'un élément.
  ```javascript
  monElement.removeAttribute('data-info');
  ```

