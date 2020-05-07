// Permet d'importer les données du fichier "data.mjs" avec les valeurs de cost, name, etc.
import {buildings} from "../../js/data.mjs"

// Permet de cibler la div avec l'id "#buildings" qui se trouve dans notre HTML
let buildingsDiv = document.getElementById('buildings');

// Fonction qui permet de générer un entier aléatoirement dans un interval
function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }


export const updateTuile = () => {

    // La boucle "for" permet de lier automatiquement les "valeurs" des tuiles (name, cost, icon, etc.) ...
    // ... présent dans "data.mjs" aux différentes tuiles que nous créons
    for (let i = 0; i < buildings.length; i++){

        // Créer une div parent avec un id "building-[i]" et une class "locked disabled
        let buildingTuile = document.createElement('div');
        buildingTuile.id = `building-${buildings[i].name.toLowerCase()}`; // toLowerCase() = transforme le texte en minuscule 
        // [0] = `building-cursor.toLowerCase()}`
        // [1] = `building-grandma.toLowerCase()}`
        // ... 
        buildingTuile.classList = 'locked disabled';
        buildingsDiv.appendChild(buildingTuile);

        // Créer une div enfant avec la class"icon"
        let tuileIcon = document.createElement('div');
        tuileIcon.classList = 'icon';
        buildingTuile.appendChild(tuileIcon);

        // Créer une div enfant avec la class "name"
        let tuileName = document.createElement('div');
        tuileName.classList = 'name';
        tuileName.innerHTML = buildings[i].name;
        buildingTuile.appendChild(tuileName);

        // Créer une div enfant avec la class "cost"
        let tuileCost = document.createElement('div');
        tuileCost.classList = 'cost';
        tuileCost.innerHTML = buildings[i].cost;
        buildingTuile.appendChild(tuileCost);

        // Créer une div enfant avec la class "number"
        let tuileNumber = document.createElement('div');
        tuileNumber.classList = 'number';
        buildingTuile.appendChild(tuileNumber); 
        

        // console.log(buildings.length) = 5
        // CONDITION IF : Si i est inférieur à buildings.length - 3 (donc 2)
        if (i < buildings.length - 3){
            //ALORS affiche les deux premières tuiles (grâce à "flex")
            buildingTuile.style.display = "flex"
        } else {
            // SINON cache les tuiles suivantes (grâce à "none")
            buildingTuile.style.display = "none"
        }
    }
}


export const mecanismeTuiles = (monObjet) => {

    // Permet de parcourir le tableau des tuiles
    for (let i = 0; i < buildings.length; i++){
    
        // CONDITION IF : Si le stock de cookies est >= au cost (ex : 15)
        if (monObjet.cookies >= buildings[i].cost){

            // let tuiles > cible la 1ere tuile (la tuile débloqué)
            let tuiles = document.getElementById(`building-${buildings[i].name.toLowerCase()}`);

            // let tuilesUnlocked > cible la 2eme tuile (après la tuile débloqué)
            let tuileUnlocked = document.getElementById(`building-${buildings[i+1].name.toLowerCase()}`);

            // let tuileAfter > cible la 3eme tuile (après la tuile débloqué)
            let tuileAfter = document.getElementById(`building-${buildings[i+2].name.toLowerCase()}`);

            // CONDITION IF (vraie) ALORS Active et débloque la 1ere tuile "tuiles"
            tuiles.classList.remove('locked') // Retire la class .locked (silhouette de l’icône est affichée)
            tuiles.classList.add('unlocked') // Ajoute la class .unlocked (l’icône originale et en couleur est affichée)
            tuiles.classList.remove('disabled') // Retire la class .disabled (l’image de fond de la tuile est assombrie + cost en corail)
            tuiles.classList.add('enabled') // Ajoute la class .enabled (le texte cost est de couleur verte)

            // CONDITION IF (vraie) ALORS Débloque la 2eme tuile "tuileUnlocked"
            tuileUnlocked.classList.remove('locked') // Retire la class .locked (silhouette de l’icône est affichée)
            tuileUnlocked.classList.add('unlocked') // Ajoute la class .unlocked (l’icône originale et en couleur est affichée)

            // CONDITION IF (vraie) ALORS fait apparaitre la 3eme tuile "tuileAfter"
            tuileAfter.style.display = "flex"
        }
    }
}


export const buyTuiles = (monObjet) => {

    const divMere = document.getElementById('buildings').childNodes
    divMere.forEach(tuile => tuile.addEventListener('click', () => {
        audioBuy()
        let tuileCost = tuile.childNodes[2]
        let tuileNumber = tuile.childNodes[3]

        monObjet.cost = tuileCost.innerHTML
        monObjet.number = tuileNumber.innerHTML

        monObjet.buy()

        tuileCost.innerHTML = monObjet.cost
        tuileNumber.innerHTML = monObjet.number
    }));
}


const audioBuy = () => {
        // Créer une balise "audio"
        let audio = document.createElement('audio');
        buildingsDiv.appendChild(audio);

        // Aouter du texte 
        audio.src = `/assets/sounds/buy${entierAleatoire(1, 4)}.mp3`
        audio.play();

        audio.addEventListener('ended', () =>{
            buildingsDiv.removeChild(audio);
        })
}