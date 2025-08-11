
let nombre1 = null;
let affichage = "";
let operation = null;
let nombre2;
let resultatfinal;

const resultat = document.getElementById("resultat");
const boutonChiffres = document.querySelectorAll(".chiffre");

boutonChiffres.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        affichage += bouton.innerText;
        resultat.innerText = affichage;
    });
});

document.getElementById("plus").addEventListener("click", function () {
    nombre1 = parseFloat(affichage);
    operation = "+";
    affichage = "";
    resultat.innerText="+";
});
const moins=document.getElementById("moins");
moins.addEventListener("click",function(){
    nombre1 = parseFloat(affichage);
    operation = "-";
    affichage = "";
    resultat.innerText="-";
});
const mult=document.getElementById("multiplier");
mult.addEventListener("click",function(){
    nombre1=parseFloat(affichage);
    resultat.innerText="x";
    operation="x";
    affichage="";
})
const diviser=document.getElementById("diviser")
diviser.addEventListener("click",function(){
    nombre1=parseFloat(affichage);
    resultat.innerText=":";
    affichage="";
    operation=":";
})
const effacer1=document.getElementById("clear");
effacer1.addEventListener("click",function(){
    resultat.innerText=0;
})
const effacer2=document.getElementById("clear");
effacer2.addEventListener("click",function(){
    affichage="";
    resultat.innerText=resultat.innerText.slice(0,-1);
})
const virgule=document.getElementById("virgule")
virgule.addEventListener("click",function(){
    if (operation===null){
        affichage+=".";
        resultat.innerText=affichage
    }
    else {
        affichage+=".";
        resultat.innerText=affichage;
        
    }
})
document.getElementById("egal").addEventListener("click", function () {
    nombre2 = parseFloat(affichage);
    resultatfinal=0;
    if (operation === "+") {
        resultatfinal = nombre1 + nombre2;
    }
    else if(operation==="-"){
        resultatfinal=nombre1-nombre2;
    }
    else if(operation==="x"){
        resultatfinal=nombre1*nombre2;
    }
    else if(operation===":"){
        resultatfinal=nombre1/nombre2;
    }

    resultat.innerText = resultatfinal;
    affichage = "";
    operation = null;
});
