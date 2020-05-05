import {buildings} from "../../js/data.mjs"

let buildingsDiv = document.getElementById('buildings');

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


// export const buyBuildings = (monObjet) =>{
//     buildingDiv.forEach(tuile => tuile.addEventListener('click', () => {
//         let cost = document.querySelector('.cost');
//         let number = document.querySelector('.number');

//         console.log(cost);
//         console.log(number);
//         // Acheter de manière effective un bâtiment en utilisant buy()
//             // Séléctionner le number 

//         // Mettre à jour la tuile dans le ​Store​
//             // Afficher le nouveau côut dans la div ​.cost​ 
//             // Afficher le nouveau nombre de bâtiments possédés dans la div ​.number
//     }))
// }

export const buyTuiles = (monObjet) => {

    const divMere = document.getElementById('buildings').childNodes
    console.log(divMere)
    divMere.forEach(tuile => tuile.addEventListener('click', () => {
        let tuileCost = tuile.childNodes[2]
        let tuileNumber = tuile.childNodes[3]

        monObjet.cost = tuileCost.innerHTML
        monObjet.number = tuileNumber.innerHTML

        monObjet.buy()

        tuileCost.innerHTML = monObjet.cost
        tuileNumber.innerHTML = monObjet.number

    }));
}
