let nombre1 = null;
let affichage = "";
let operation = null;
let nombre2;
let resultatfinal = null;

const resultat = document.getElementById("resultat");
const boutonChiffres = document.querySelectorAll(".chiffre");

boutonChiffres.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        affichage += bouton.innerText;
        resultat.innerText = affichage;
    });
});

document.getElementById("plus").addEventListener("click", function () {
    if (affichage !== "" || resultatfinal !== null) {
        if (resultatfinal !== null) {
            nombre1 = parseFloat(resultatfinal);
        } else {
            nombre1 = parseFloat(affichage);
        }
        operation = "+";
        affichage = "";
        resultat.innerText = "+";
    }
});

const moins = document.getElementById("moins");
moins.addEventListener("click", function() {
    if (affichage !== "" || resultatfinal !== null) {
        if (resultatfinal !== null) {
            nombre1 = parseFloat(resultatfinal);
        } else {
            nombre1 = parseFloat(affichage);
        }
        operation = "-";
        affichage = "";
        resultat.innerText = "-";
    }
});

const mult = document.getElementById("multiplier");
mult.addEventListener("click", function() {
    if (affichage !== "" || resultatfinal !== null) {
        if (resultatfinal !== null) {
            nombre1 = parseFloat(resultatfinal);
        } else {
            nombre1 = parseFloat(affichage);
        }
        operation = "x";
        affichage = "";
        resultat.innerText = "x";
    }
});

const diviser = document.getElementById("diviser");
diviser.addEventListener("click", function() {
    if (affichage !== "" || resultatfinal !== null) {
        if (resultatfinal !== null) {
            nombre1 = parseFloat(resultatfinal);
        } else {
            nombre1 = parseFloat(affichage);
        }
        operation = ":";
        affichage = "";
        resultat.innerText = ":";
    }
});

const effacer1 = document.getElementById("clear");
effacer1.addEventListener("click", function() {
    resultat.innerText = 0;
    affichage = "";
    nombre1 = null;
    operation = null;
    resultatfinal = null;
});

const effacer2 = document.getElementById("clearlast");
effacer2.addEventListener("click", function() {
    affichage = affichage.slice(0, -1);
    resultat.innerText = affichage || 0;
});

const virgule = document.getElementById("virgule");
virgule.addEventListener("click", function() {
    if (!affichage.includes(".")) {
        affichage += ".";
        resultat.innerText = affichage;
    }
});

document.getElementById("egal").addEventListener("click", function() {
    if (operation !== null && affichage !== "") {
        nombre2 = parseFloat(affichage);
        
        switch (operation) {
            case "+":
                resultatfinal = nombre1 + nombre2;
                break;
            case "-":
                resultatfinal = nombre1 - nombre2;
                break;
            case "x":
                resultatfinal = nombre1 * nombre2;
                break;
            case ":":
                if (nombre2 === 0) {
                    resultatfinal = "division par zero impossible";
                } else {
                    resultatfinal = nombre1 / nombre2;
                }
                break;
        }

        resultat.innerText = resultatfinal;
        affichage = "";
        operation = null;
    }
});
