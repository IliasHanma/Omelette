import { Ingredient,Epicerie, Panier, Personne,Bol } from "./classes.js";
import {maison } from "./objets.js";



// Ingrédients
let oignon = new Ingredient ("oignon","coupé",1.5);
let oeuf = new Ingredient ("oeuf","entier",1);
let sel = new Ingredient ("sel","moulu",0.85);
let poivre = new Ingredient ("poivre","moulu",2);

// Paniers
let panier1 = new Panier ("panier1");
let panier2 = new Panier ("panier2");
let panier3 = new Panier ("panier3");




let epicerie = new Epicerie("Lidl");
epicerie.ajouterIngredient(oignon);
epicerie.ajouterIngredient(oeuf);
epicerie.ajouterIngredient(sel);
epicerie.ajouterIngredient(poivre);

epicerie.ajouterPanier(panier1);
epicerie.ajouterPanier(panier2);
epicerie.ajouterPanier(panier3);



let personne = new Personne("Adnan",maison,100);








// >>1. Pour dire que le personnage est à la maison :
// >>1. Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet
//  maison
// >>1. Afficher un message tel que :
// >>1. console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

personne.seDeplacer(maison);


// >>1. Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
personne.seDeplacer(epicerie);

// >>1. Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets
//  de l'épicerie et le met dans sa main droite.
// >>1. Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
// >>1. console.log(`${personnage.nom} a pris un ${personnage.mainDroite.type}`);

personne.prendreMainDroite(epicerie.paniers[0]);
epicerie.paniers.shift();
console.log(`${personne.nom} a pris un ${personne.mainDroite.type}`);

// >>1. Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie
//  (1 à 1) et en faire une COPIE dans le panier du personnage
// >>1. Afficher un message à chaque ingrédient pris

// for (let i = 0; i < epicerie.ingredients.length; i++) {
//     personne.mainDroite.contenu.push(epicerie.ingredients[i]);
//     console.log(`%c${personne.nom} a pris ${ personne.mainDroite.contenu[i].nom}`,"color:red;");


    
// }

epicerie.ingredients.forEach((ingredient,i)=> {
    personne.ajouterDansPanierMainDroite(ingredient);
    console.log(`%c${personne.nom} a pris ${personne.recupererContenuIndice(i).nom}`,"color:red;");


})


// >>1. Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, 
// on va les passer 1 à 1 dans la fonction payerArticle()
// >>1. Afficher un message de ce qu'il reste d'argent sur le personnage.

personne.payerArticle();
console.log(personne.argent);

// >>1. rentrer à la maison (comme ça on pourra cuisiner)
personne.seDeplacer(maison);
// >>1. mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
let bol = new Bol;
personne.recupererContenu().forEach(ingredient => {
    bol.contenu.push(ingredient);
})

// >>1. Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
personne.viderContenu();
// >>1. Afficher un petit message de chaque ingrédient qu'on met dans le bol.
bol.contenu.forEach(ingredient => {
    console.log(ingredient);
})
// >>1. Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
personne.seDeplacer(epicerie);
epicerie.ajouterPanier(personne.mainDroite);
// >>1. Afficher un petit message
// >>1. Retourner à la maison pour continuer l'omelette

// >>1. Afficher un petit message
personne.seDeplacer(maison);
// >>1. Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

// >>1. Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
// >>1. Afficher un message avec le nouveau mélange
// >>1. vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
// >>1. Afficher un message final, notre omelette est cuite :)



























