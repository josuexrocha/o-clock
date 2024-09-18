# **Fiche Récapitulative : Maîtriser le Terminal (Ligne de Commandes)**

## **1. Introduction au Terminal**

Le terminal est une interface en ligne de commande qui permet d'interagir directement avec le système d'exploitation. Il offre une puissance et une flexibilité accrues pour gérer les fichiers, les processus et configurer le système.

## **2. Ouverture d’un Terminal**

Il existe plusieurs méthodes pour ouvrir un terminal sous Linux :

- **Icône sur le bureau** : Cliquez sur l'icône du terminal présente sur le bureau ou dans la barre des tâches.

- **Menu principal** : En bas dans le Menu principal, dans les Favoris, cliquez sur l’icône du terminal.

- **Raccourci clavier** : Depuis n’importe quel endroit, appuyez sur Ctrl + Alt + T pour ouvrir un terminal (fonctionne dans la plupart des distributions Linux).

## **3. La Casse (Sensibilité à la Casse)**

Le shell (interpréteur de commandes) est sensible à la casse. Cela signifie que les majuscules et les minuscules sont considérées comme des caractères différents.

- **Exemple** :

  - `pwd` est une commande valide.

  - `PWD`, `Pwd` ou `pWD` ne sont pas reconnues comme commandes.

## **4. La Tilde ~**

Dans le terminal, la tilde `~` représente le répertoire HOME de l’utilisateur. Ce répertoire contient généralement les dossiers Bureau, Documents, Téléchargements, etc.

- **Exemple** :

  - `/home/student` est le répertoire HOME pour l'utilisateur `student`.

## **5. L’Autocomplétion**

L'autocomplétion est une fonctionnalité très utile qui permet de compléter automatiquement les commandes ou les noms de fichiers.

- **Utilisation** : Appuyez sur la touche `Tab` pendant la saisie pour que le terminal complète automatiquement votre saisie si possible.

## **6. Navigation dans le Système de Fichiers**

### **6.1. Commandes de Base**

- **`pwd`** : Affiche le répertoire de travail actuel.

    ```
    pwd
    # Exemple de sortie :
    /home/mint
    ```

- **`ls`** : Liste les fichiers et dossiers du répertoire courant.
  - **`ls -l`** : Format détaillé
  - **`ls -a`** : Affiche les fichiers cachés
  - **`ls -al`** : Liste détaillée avec les fichiers cachés

    ```
    ls
    # Exemple de sortie :
    Bureau   Documents  Modèles  Public  Vidéos
    Desktop  Images     Musique  Téléchargements
    ```

- **`cd [chemin]`** : Change le répertoire courant.

  - **`cd ..`** : Remonte d’un niveau

  - **`cd ~`** : Accède au répertoire personnel

    ```
    cd Documents/
    # Changement vers le répertoire Documents
    ```

### **6.2. Concepts Supplémentaires**

- Dossier courant : Représenté par un **`.`**

- Dossier parent : Représenté par **`..`**

## **7. Gestion des Fichiers et Dossiers**

### **7.1. Création de Dossiers**

- **`mkdir [nom_dossier]`** : Crée un nouveau dossier.

    ```
    mkdir nouveauDossier/
    mkdir dossierExistant/nouveauDossier/
    mkdir nouveauDossier1 nouveauDossier2 nouveauDossier3
    ````

### **7.2. Suppression de Dossiers**

- **`rmdir [nom_dossier]`** : Supprime un dossier vide.

    ```
    rmdir dossierASupprimer/
    ````

### **7.3. Création et Suppression de Fichiers**

- **`touch [fichier]`** : Crée un nouveau fichier ou met à jour la date de modification.

    ```
    touch monfichier.extension
    ```

- **`rm [fichier]`** : Supprime un fichier.

  - **`rm -r [dossier]`** : Supprime récursivement un dossier

  - **`rm -f [fichier]`** : Force la suppression sans confirmation

  - **`rm -rf [dossier]`** : Supprime récursivement et de manière forcée

    ```
    rm monfichier.extension
    rm -rf mondossier/
    ```

### **7.4. Déplacement et Renommage**

- **`mv [source] [destination]`**: Déplace ou renomme un fichier ou un dossier.

    ```
    mv test Documents
    mv test supertest
    ````

### **7.5. Copie de Fichiers et Dossiers**

- **`cp [source] [destination]`** : Copie un fichier.

    ```
    cp chemin/fichier.extension cheminDeDestination/
    ```

- **`cp -R [source] [destination]`** : Copie récursivement un dossier.

    ```
    cp -R chemin/monDossier/ cheminDeDestination/
    ```

## **8. Visualisation et Édition de Fichiers**

### **8.1. Visualisation**

- **`cat [fichier]`** : Affiche le contenu complet d’un fichier.

    ```
    cat chemin/vers/monfichier.extension
    ```

- **`less [fichier]`** : Permet de naviguer dans un fichier page par page.

- **`head [fichier]`** : Affiche les premières lignes d’un fichier.

- **`head -n 20 [fichier]`** : Affiche les 20 premières lignes.

- **`tail [fichier]`** : Affiche les dernières lignes d’un fichier.

- **`tail -f [fichier]`** : Suit les ajouts en temps réel.

### **8.2. Édition**

- **`nano [fichier]`** : Ouvre un fichier dans l'éditeur de texte **`nano`**.

    ```
    nano chemin/vers/monfichier.extension
    ```

Raccourcis dans Nano :

- **`Ctrl + O`** puis **`Enter`** : Enregistrer

- **`Ctrl + X`** : Quitter

## **9. Gestion des Permissions et Propriétés**

### **9.1. Comprendre les Permissions**

- **Types de droits** :

  - Lecture : `4`

  - Écriture : `2`

  - Exécution : `1`

- **Sommes des droits** :

  - Lecture + Écriture = `6`

  - Lecture + Écriture + Exécution = `7`

  - Lecture uniquement = `4`

- **Niveaux d’utilisateurs** :

  - Propriétaire

  - Groupe

  - Autres

- **Exemple** :

  - **`chmod 755 /var/www/html`** :

    - Propriétaire : Lecture + Écriture + Exécution (`7`)

    - Groupe : Lecture + Exécution (`5`)

    - Autres : Lecture + Exécution (`5`), aucun droit (`0`)

  - **`chmod -Rf 755 /var/www/html`** : Applique les permissions de manière récursive à tous les sous-dossiers et fichiers.

### **9.2. Commandes de Gestion des Permissions**

- **`chmod [permissions] [fichier]`** : Modifie les permissions d’un fichier ou dossier.

    ```
    chmod 755 script.sh
    ```

- **`chown [propriétaire]:[groupe] [fichier]`** : Change le propriétaire et le groupe d’un fichier ou dossier.

    ```
    chown user:group fichier
    ```

## **10. Gestion des Processus et Système**

- **`ps`** : Liste les processus en cours.

  - **`ps aux`** : Affiche tous les processus détaillés

- **`top`** : Affiche en temps réel les processus actifs et l’utilisation des ressources.

- **`kill [PID]`** : Termine un processus à partir de son ID (PID).

- **`df -h`** : Affiche l’espace disque utilisé et disponible.

- **`du -sh [dossier]`** : Affiche la taille d’un dossier.

## **11. Recherche et Filtrage

- **`grep [motif] [fichier]`** : Recherche un motif dans un fichier.

  - **`grep -r [motif] [répertoire]`** : Recherche récursive.

- **`find [chemin] -name [nom_fichier]`** : Recherche des fichiers ou dossiers par nom.

## **12. Réseaux et Connexions**

- **`ping [adresse]`** : Teste la connectivité réseau avec une adresse.

- **`ifconfig`** ou **`ip a`** : Affiche les configurations réseau.

- **`ssh [utilisateur]@[hôte]`** : Se connecte à un serveur distant via SSH.

- **`scp [source] [destination]`** : Copie sécurisée de fichiers entre machines.

## **13. Gestion des Paquets (Selon le Système)**

### **13.1. Pour Debian/Ubuntu** :

- **`apt update`** : Met à jour la liste des paquets.

- **`apt upgrade`** : Met à jour les paquets installés.

- **`apt install [package]`** : Installe un paquet.

- **`apt remove [package]`** : Désinstalle un paquet

### **13.2. Pour Fedora** :

- **`dnf update`**.

- **`dnf install [package]`**.

- **`dnf remove [package]`**.

## **14. Astuces et Raccourcis Utiles**

- **Complétion automatique** : Utilisez la touche **`Tab`** pour compléter les commandes ou les noms de fichiers.

- **Historique des commandes** :

  - Utilisez les flèches **`Haut`** et **`Bas`** pour naviguer dans l’historique.

  - **Recherche rapide** : Appuyez sur **`Ctrl + R`** et tapez une partie de la commande pour retrouver une commande précédente.

- **Raccourcis de navigation** :

  - **`Ctrl + C`** : Annule la commande en cours

  - **`Ctrl + Z`** : Suspend le processus actif

  - **`Ctrl + L`** : Efface l’écran

## **15. Scripts Shell de Base**

Créer un fichier script (ex. `script.sh`) :

```
#!/bin/bash
# Commentaire
echo "Bonjour, monde!"
```

Rendre le script exécutable :

```
chmod +x script.sh
```

Exécuter le script :

```
./script.sh
```

## **16. Historique des Commandes**

- **`history`** : Affiche l’ensemble des commandes précédemment saisies.

- **Recherche avec `Ctrl + R`** : Permet de rechercher une commande en tapant une partie de celle-ci.

    Exemple :

    - Tapez **`Ctrl + R`**, puis **`cp`** pour retrouver la commande complète **`cp -R chemin/monDossier/ cheminDeDestination/`**.

## **17. Régler les Droits sur un Fichier/Dossier**

### **17.1. Commandes Associées**

- **Changer les permissions** :

```
chmod 755 /var/www/html
chmod -Rf 755 /var/www/html
```

- **Changer le propriétaire et le groupe** :

```
chown utilisateur:groupe fichier
```

## **18. Ressources Supplémentaires**

- **Manuels et Pages de Manuels** :
Utilisez la commande **`man [commande]`** pour accéder au manuel d'une commande.

- **Aide intégrée** :
Certaines commandes offrent une aide via **`--help`**, par exemple **`ls --help`**.
