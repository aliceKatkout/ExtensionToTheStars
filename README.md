# ExtensionToTheStars
Une extension qui a pour but de relier ciel et terre
Et ensuite terre et mer

C'est une extension pour Google Chrome.
Son but est d'afficher une fenêtre pop up lorsque l'on clique sur le logo de l'extension, dans laquelle l'utilisateur peut rentrer l'Url de l'image de son choix.
Cette image remplacera alors toutes les images affichées sur les pages web consultées.
Le bouton go sert à stocker l'url de cette image.
Le remplacement n'aura lieu qu'après le rafraichissement de la page.
L'extension met aussi les h1 en vert, borde les images de rouge et augmente la taille des paragraphes.

Nous voulions faire en sorte que le bouton go, en plus de stocker l'url de l'image, lance le rafraichissement de la page pour directement remplacer les images.

1)manifest.json
Fichier initial de l'extension.

2) content.js
Récupère les h1 et les mets en vert.
Récupère les images et en change la source grâce à l'url rentrée par l'utilisateur.

3)popup.html
Affichage de la fenêtre popup et endroit où l'utilisateur entre son url.

4)popup.js
Stocke l'url grâce à Google Storage.

5)style.css
Applique des bordures rouges aux images et augmente la taille des paragraphes.


Toutes les lignes de codes en commentaire sont des test à ne pas prendre en compte.
