# Challenge Episode 3

## Partie 1

Les méthodes Active Record du modèle `Level` ont été codées 🎉 !

On a pu vérifier que ces méthodes fonctionnent en jouant dans test.js.

En s'inspirant (très largement) de ce code existant, on passe à la suite :

**coder les méthodes Active Record du modèle User**

- `findAll()` : trouve tous les Users dans la base de données.
- `findById(id)` : trouve un User en fonction de son ID.
- `findByEmail(email)` : trouve un User par son email.
- `insert()` : insert l'instance courante dans la base de données.
- `update()` : met à jour l'instance courante dans la base de données. (attention, ça peut-être touchy)
- `delete()` : supprime l'instance courante de la base de données.

Et on oublie pas de tester ses méthodes et leur bon fonctionnement dans un fichier de test approprié :) 

## Partie 2 - Bonus casse-tête

(Attention, très exploratoire !) 

On a quand même pas mal de code qui se ressemble, non ? On pourrait commencer à réfléchir à factoriser tout ce beau monde ? 

Par exemple la méthode `Level.findAll()` va beaucoup ressembler à celle de `User.findAll()`. 

Il doit y avoir moyen de faire quelque chose dans le `CoreModel` !