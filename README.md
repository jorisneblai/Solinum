# SOLINUM

#### *Fonctionnalités de l'app*
Cette application permet à l'association SOLINUM et à toutes personnes souhaitant ajouter des points d'intérêts géolocalisés (POI) pour faciliter l'accès à des services aux personnes dans le besoin.
Afin de garantie une qualité de données irréprochables, les soumissions de POIs sont modérés par des chargé.e.s de développement locaux.

Un formulaire permet cette ajout grâce à plusieurs informations nécessaires :


- Nom du point
- Adresse E-mail
- Adresse postale
- Type de point d'intérêt

#### *Explications des choix de techno et framework*
J'ai décidé pour ce projet d'utiliser le language de programmation *JavaScript* aidé du framework *React* qui est le seul que j'ai appris, que je continue d'apprendre à utiliser et que j'apprécie très grandement par son côté intuitif.
Pour la construction de mes composants, je me suis aidé de la librairie [Material UI](https://mui.com/)

#### *Fonctionnalités de l'application*
Comme indiqué précédemment, cette application permet l'insertion de POI grâce à un formulaire à remplir.
Celui-ci, nécessite une adresse mail valide. Un message d'erreur apparaîtra si ce n'est pas le cas.
Concernant l'adresse postale, des coordonnées de longitude et de latitude sont récupéré à la soumission du formulaire, ce qui permettra des les évolutions possibles, d'intégrer une map, avec des marqueurs afin de visualiser exactement où se trouve tel point.

Tous les POIs insérés, apparaissent sous forme de liste dans un tableau du Dashboard en fonction de leur statut (Brouillon / En ligne).
Il est possible de modifier l'état facilement depuis ce tableau. En le (ou les) sélectionnant, un bouton apparaîtrait permettant de le modifier.
Un second bouton apparaît également, permettant de demander plus d'information concernant le.s point.s.


#### *Améliorations envisageables*
L'intégration d'une carte interactive permettant de mieux visualiser les points d'intérêts géolocalisés dans une ville.