
let maison = {
    nom: "maison",
    personnes: [],



}

let outil ={
    nom : "couteau",
    couper (){},
}




let poele ={
    contenu : [],
    cuire (){
        this.contenu = "cuit";
    },
    
    
}

let cuisson = setTimeout(poele.cuire,4000);



export{maison,poele,cuisson}