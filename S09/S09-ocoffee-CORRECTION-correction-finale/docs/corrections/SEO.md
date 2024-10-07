# Conseils SEO (Search Engine Optimization)

Ouvrir les `DevTools` (Inspecteur) Chrome, puis se rendre dans l'onglet `Lighthouse`.

En lançant une analyse, on remarque une amélioration possible en terme de performance : `Serve images in next-gen formats` : la plupart de nos images sont en `png`, et peuvent être converti au format `.webp` qui offre une meilleure compression et donc expérience utilisateur améliorée.

On se propose donc d'[installer `cwebp`](https://developers.google.com/speed/webp/docs/precompiled) pour convertir nos assets `.png` et `.jpg` au format `.webp`. Le plus simple étant d'utiliser le gestionnaire de packet Linux `apt` (ou `apt-get`) pour faciliter l'installation.

Une fois installé : 
- on converti notre fichier `.jpg`
  - `cwebp ./public/images/about.jpg -o ./public/images/about.webp`
- on converti nos fichiers `.png`
  - `for file in ./public/images/coffees/*.png; do cwebp "$file" -o "${file%.png}.webp"; done`
- on supprime les ressources `.jpg`/`.png` qu'on ne va plus utiliser 
  - `rm ./public/images/about.jpg`
  - `rm ./public/images/coffees/*.png`

Enfin, on met à jours nos views `EJS` avec les nouveaux liens `.webp` : 
- la `performance` de notre application passe d'un score de 75 à 92 🎉 !

