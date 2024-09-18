
# Fiche récapitulative : VSCode, Git, GitHub, et SSH GitHub

## Utiliser VSCode

VSCode (Visual Studio Code) est un éditeur de code open-source développé par Microsoft. Il est largement utilisé par les développeurs en raison de ses nombreuses fonctionnalités :

- **Extensions** : VSCode permet d'ajouter des extensions pour supporter des langages, des frameworks, et améliorer la productivité (comme l'extension Prettier pour le formatage automatique du code).
- **Terminal intégré** : Vous pouvez utiliser un terminal directement dans l'éditeur pour exécuter des commandes Git, npm, etc.
- **Débogage** : VSCode dispose de puissants outils de débogage intégrés pour suivre l'exécution du code.
- **IntelliSense** : Propose des suggestions de code basées sur l'API des langages utilisés.

### Raccourcis utiles

- **Ouvrir un fichier** : `Ctrl + P`
- **Rechercher dans le projet** : `Ctrl + Shift + F`
- **Terminal intégré** : `Ctrl + Backtick (\`)`

---

## Comprendre les bases de Git

Git est un système de contrôle de version qui permet de suivre les changements effectués dans les fichiers et de collaborer avec d'autres développeurs. Voici les commandes de base :

### Commandes Git de base
1. **Initialiser un dépôt** :
   ```bash
   git init
   ```
2. **Ajouter des fichiers à l'index** :
   ```bash
   git add .
   ```
3. **Valider les changements avec un message** :
   ```bash
   git commit -m "Message du commit"
   ```
4. **Afficher l'état des fichiers** :
   ```bash
   git status
   ```
5. **Consulter l'historique des commits** :
   ```bash
   git log
   ```

Git vous permet de travailler en local sur votre machine et de suivre l'évolution de votre projet.

---

## Découvrir GitHub et lien avec Git

GitHub est une plateforme de gestion de projets basée sur Git. Elle permet de partager vos dépôts (repos) et de collaborer avec d'autres développeurs.

- **GitHub** : Héberge des dépôts Git en ligne, facilitant le partage du code.
- **Fonctionnalités de collaboration** : Issues, pull requests, forks.

### Lien entre Git et GitHub
- **Local** : Vous travaillez sur votre machine avec Git.
- **Distant** : Vous poussez vos changements sur GitHub pour les partager.

### Publier un dépôt sur GitHub
1. **Lier un dépôt local à un dépôt distant sur GitHub** :
   ```bash
   git remote add origin git@github.com:username/nom-du-repo.git
   ```
2. **Pousser les commits sur GitHub** :
   ```bash
   git push -u origin master
   ```

---

## Mettre en place le SSH GitHub

L'utilisation de clés SSH permet de s'authentifier de manière sécurisée avec GitHub, sans avoir à entrer son mot de passe à chaque commande.

### Générer une clé SSH

1. Créez une clé SSH avec votre email :
   ```bash
   ssh-keygen -t ed25519 -C "votre-email@exemple.com"
   ```
2. Ajoutez la clé privée à `ssh-agent` :
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```
3. Ajoutez la clé publique à votre compte GitHub :
   - Allez dans **Settings > SSH and GPG keys > New SSH Key**.
   - Collez le contenu de `~/.ssh/id_ed25519.pub`.

4. Testez la connexion SSH :
   ```bash
   ssh -T git@github.com
   ```

Si la configuration est correcte, vous verrez un message de confirmation de la part de GitHub.

---

## Poursuivre en Markdown (code / rendu)

Le Markdown est un langage de balisage léger permettant de formater du texte. Voici quelques éléments courants :

- **Titre** : `# Titre 1`, `## Titre 2`, etc.
- **Liste à puces** :
  ```markdown
  - Élément 1
  - Élément 2
  ```
- **Code** :
  ```markdown
  `exemple de code`
  ```
  ou
  ```bash
  # Exemple de code bash
  echo "Bonjour"
  ```

Le Markdown est souvent utilisé pour créer des documentations, des README ou des articles techniques.

---

*Dernière modification : 18 septembre 2024*
