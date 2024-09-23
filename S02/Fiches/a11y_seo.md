
# Fiche Récapitulative : A11Y & SEO

## 1. **Référentiels, Outils et Bonnes Pratiques A11Y (Accessibilité)**

### Référentiels
- **WCAG (Web Content Accessibility Guidelines)** : Les directives pour l'accessibilité des contenus Web (WCAG) sont un ensemble de recommandations pour rendre le contenu web accessible à tous, y compris les personnes handicapées.
  - **Principes fondamentaux** :
    - **Perceptible** : L'information et les composants de l'interface utilisateur doivent être présentés de manière que les utilisateurs puissent les percevoir.
    - **Utilisable** : Les composants de l'interface utilisateur et la navigation doivent être utilisables.
    - **Compréhensible** : L'information et le fonctionnement de l'interface utilisateur doivent être compréhensibles.
    - **Robuste** : Le contenu doit être assez robuste pour être interprété de manière fiable par une large variété d'agents utilisateurs, y compris les technologies d'assistance.
  - **Niveaux de conformité** :
    - **Niveau A** : Le niveau de base qui couvre les exigences minimales. Exemple : fournir un texte alternatif pour les images.
    - **Niveau AA** : Niveau intermédiaire recommandé pour les sites professionnels. Exemple : assurer un bon contraste de couleurs.
    - **Niveau AAA** : Le plus haut niveau de conformité, idéal pour les sites nécessitant une accessibilité maximale. Exemple : fournir des alternatives en langue des signes pour les contenus multimédias.

### Outils pour l'accessibilité
- **Wave** : Un outil en ligne qui permet d’évaluer l'accessibilité d'une page en identifiant les erreurs A11Y et en proposant des suggestions d'amélioration.
- **Lighthouse** : Inclus dans le navigateur Chrome, il génère un rapport d'accessibilité avec des suggestions pour améliorer la conformité aux normes A11Y.
- **axe DevTools** : Un plugin pour Chrome et Firefox qui permet de détecter les problèmes d'accessibilité directement dans l'inspecteur d'éléments.
- **NVDA** : Un lecteur d'écran gratuit pour Windows, utile pour tester l'accessibilité de votre site pour les utilisateurs non-voyants.
- **Color Contrast Checker** : Permet de vérifier que le contraste entre le texte et l'arrière-plan est suffisant pour une bonne lisibilité.

### Bonnes pratiques A11Y
- **Texte alternatif (alt text)** : Fournir une description textuelle pour chaque image avec l'attribut `alt`, permettant aux utilisateurs de lecteurs d'écran de comprendre le contenu des images.
- **Contrastes des couleurs** : Utiliser des contrastes de couleur suffisants entre le texte et l'arrière-plan pour garantir la lisibilité, avec un ratio de contraste d'au moins 4.5:1 pour les textes normaux et 3:1 pour les textes larges.
- **Navigation au clavier** : Assurer que tous les éléments interactifs (boutons, liens, formulaires) soient accessibles et utilisables au clavier. Vérifier l'ordre de tabulation logique.
- **Aria-labels** : Utiliser les attributs ARIA (`aria-label`, `aria-labelledby`, `aria-describedby`) pour fournir des informations supplémentaires aux technologies d'assistance.
- **Formulaires accessibles** : Chaque champ de formulaire doit avoir une étiquette (`label`) associée pour être correctement interprété par les lecteurs d'écran.
- **Tests utilisateurs** : Intégrer des utilisateurs ayant divers handicaps dans les phases de tests pour identifier les problèmes d'accessibilité en conditions réelles.

### Étapes pratiques pour tester l'accessibilité
1. **Audit avec des outils automatiques** : Utilisez Wave, Lighthouse, ou axe DevTools pour identifier les problèmes évidents.
2. **Test de navigation au clavier** : Parcourez votre site en utilisant uniquement le clavier pour vous assurer que tous les éléments interactifs sont accessibles.
3. **Utilisation de lecteurs d'écran** : Testez votre site avec NVDA ou VoiceOver pour vérifier l'expérience utilisateur des personnes non-voyantes.
4. **Vérification manuelle des contrastes** : Utilisez un outil de vérification de contraste pour vérifier que toutes les combinaisons de couleurs sont conformes.

## 2. **Outils et Bonnes Pratiques SEO (Search Engine Optimization)**

### Concepts de base du SEO
- **Indexation** : Processus par lequel les moteurs de recherche analysent et stockent le contenu d'un site web dans leur base de données pour le récupérer lors d'une recherche.
- **Crawling** : Exploration automatisée des pages web par les robots des moteurs de recherche pour découvrir et indexer le contenu.
- **PageRank** : Algorithme de Google qui évalue la qualité et la quantité des liens pointant vers une page pour déterminer son importance et son classement dans les résultats de recherche.

### Outils pour le SEO
- **Google Search Console** : Outil gratuit de Google qui aide à surveiller et à maintenir la présence d'un site dans les résultats de recherche Google. Il permet de soumettre des sitemaps, de suivre les performances des pages, et d'identifier les erreurs d'indexation.
- **Ahrefs** : Outil SEO payant permettant d'analyser les backlinks, de faire des recherches de mots-clés, de surveiller les concurrents, et de suivre le classement des pages.
- **Yoast SEO** : Plugin pour WordPress qui aide à optimiser le contenu en fournissant des recommandations sur les mots-clés, la lisibilité, et les balises méta.
- **Screaming Frog** : Outil de crawling qui analyse les URL de votre site pour identifier les problèmes SEO potentiels comme les balises manquantes, les redirections, et les erreurs 404.

### Bonnes pratiques SEO
- **Optimisation des balises Meta** : Assurez-vous que chaque page a une balise `title` unique et descriptive, ainsi qu'une balise `meta description` attrayante qui résume le contenu de la page et incite à cliquer.
- **Contenu de qualité** : Créez un contenu pertinent, original, et régulièrement mis à jour. Utilisez des mots-clés ciblés et veillez à ce que votre contenu soit structuré de manière claire avec des sous-titres (`h1`, `h2`, `h3`).
- **Structure des URL** : Utilisez des URL courtes, lisibles, et descriptives, intégrant des mots-clés pertinents. Évitez les chaînes de caractères complexes et assurez-vous que les URL reflètent bien la hiérarchie de votre site.
- **Liens internes** : Utilisez des liens internes pour guider les utilisateurs vers d'autres pages pertinentes de votre site, tout en améliorant le maillage interne pour le SEO.
- **Vitesse de chargement** : Optimisez la vitesse de chargement des pages en compressant les images, en utilisant la mise en cache du navigateur, et en minimisant les fichiers CSS et JavaScript.
- **Mobile First** : Assurez-vous que votre site est entièrement responsive et optimisé pour les appareils mobiles, en suivant les principes du Mobile First pour la conception.
- **Rich Snippets** : Implémentez des données structurées (Schema.org) pour enrichir vos résultats dans les moteurs de recherche avec des informations supplémentaires comme les avis, les prix, et les FAQ.
- **Optimisation des images** : Utilisez des balises `alt` pour décrire les images, compressez les fichiers image pour réduire leur taille, et utilisez des formats modernes comme WebP.

### Liste de contrôle SEO & A11Y
- [ ] **Texte alternatif pour les images**
- [ ] **Balises Meta optimisées**
- [ ] **Navigation au clavier fluide**
- [ ] **Contenu de qualité et structuré**
- [ ] **Liens internes bien placés**
- [ ] **Contraste des couleurs vérifié**
- [ ] **Vitesse de chargement optimisée**
- [ ] **Test d'accessibilité avec un lecteur d'écran**
- [ ] **Mobile First appliqué**

### Références supplémentaires
- [WCAG 2.1 Guidelines - W3C](https://www.w3.org/WAI/standards-guidelines/wcag/fr)
- [SEO Starter Guide - Google](https://support.google.com/webmasters/answer/7451184?hl=fr)
- [Google Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Schema.org - Structured Data](https://schema.org/)
