import {buildings} from "../../js/data.mjs"

let buildingsDiv = document.getElementById('buildings');

function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

export const updateTuile = () => {

    for (let i = 0; i < buildings.length; i++){
        // Créer une div parent avec un id "building-cursor" et une class "locked disabled
        let buildingTuile = document.createElement('div');
        buildingTuile.id = `building-${buildings[i].name.toLowerCase()}`;
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
        
        if (i < buildings.length - 3){
            buildingTuile.style.display = "flex"
        } else {
            buildingTuile.style.display = "none"
        }
    }
}


export const mecanismeTuiles = (monObjet) => {

    for (let i = 0; i < buildings.length; i++){
    
        if (monObjet.cookies >= buildings[i].cost){
            let tuiles = document.getElementById(`building-${buildings[i].name.toLowerCase()}`);
            let tuileUnlocked = document.getElementById(`building-${buildings[i+1].name.toLowerCase()}`);
            let tuileAfter = document.getElementById(`building-${buildings[i+2].name.toLowerCase()}`);

            tuiles.classList.remove('locked')
            tuiles.classList.add('unlocked')

            tuiles.classList.remove('disabled')
            tuiles.classList.add('enabled')

            tuileUnlocked.classList.remove('locked')
            tuileUnlocked.classList.add('unlocked')

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