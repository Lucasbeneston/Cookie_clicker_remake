import {buildings} from "../../js/data.mjs"

const buildingsDiv = document.getElementById('buildings');

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
            tuileAfter.style.display = "flex"

            tuiles.classList.remove('locked')
            tuiles.classList.add('unlocked')

            tuiles.classList.remove('disabled')
            tuiles.classList.add('enabled')

            tuileUnlocked.classList.remove('locked')
            tuileUnlocked.classList.add('unlocked')
        }
    }
}



// // Faire en fonction des numéros dans la class Buildings
// // export const apparitionTuiles = () =>{
//     for (let i = 0; i < buildings.length; i++){
//         if (monObjet.cookies >= buildings[i].cost){
//             let tuiles = document.getElementById(`building-${buildings[i].name.toLowerCase()}`);

//             tuiles.classList.remove('unlocked')
//             tuiles.classList.add('locked')

//             tuiles.classList.remove('enabled')
//             tuiles.classList.add('disabled')
//         }
//     }  
// }
