 export class Ingredient {
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export class Epicerie {
    constructor(nom){
        this.nom = nom;
        this.personnes = [];
        this.paniers = [];
        this.ingredients = [];
    }
     ajouterPersonne(personne){
     this.personnes.push(personne);
    }
    ajouterPanier(panier){
        this.paniers.push(panier);
    }
    ajouterIngredient(ingredient){
        this.ingredients.push(ingredient);
    }
}

export class Panier {
    constructor(type){
        this.type = type;
        this.contenu = [];
    }
    ajouterIngredient(ingredient){
        this.contenu.push(ingredient);
    }
}



export class Personne {
    constructor(nom,lieu,argent){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = {};
        this.mainGauche = {};
    }
    seDeplacer (destination){
        this.lieu = destination;
        console.log(`${this.nom} est actuellement à ${this.lieu.nom}`);
    }
    payerArticle (){   
        this.mainDroite.contenu.forEach(ingredient => {
            this.argent -= ingredient.prix 
        });
    }
    couper(ingredient){
         if(ingredient == "entier"){
             
         }
    }
    prendreMainDroite(panier){
        this.mainDroite = panier;
    }
    ajouterDansPanierMainDroite(ingredient){
        this.mainDroite.contenu.push(ingredient);

    }
    recupererContenuIndice(i){
        return this.mainDroite.contenu[i];
    }
    recupererContenu(){
        return this.mainDroite.contenu;
    }
    viderContenu(){
        this.mainDroite.contenu = [];
    }
}

export class Bol{
    constructor(){
        this.contenu = [];
    }
    melanger(){};
}




