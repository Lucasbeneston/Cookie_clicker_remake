export default function updateTuile(){
    // Créer une div parent avec un id "building-cursor" et une class "locked disabled
    let buildingTuile = document.createElement('div');
    buildingTuile.id = 'building-cursor';
    buildingTuile.classList = 'locked disabled';
    console.log(buildingTuile);

    // Créer une div enfant avec la class"icon"
    let tuileIcon = document.createElement('div');
    tuileIcon.classList = 'icon';
    buildingTuile.appendChild(tuileIcon)

    // Créer une div enfant avec la class "name"
    let tuileName = document.createElement('div');
    tuileName.classList = 'name';
    tuileName.innerHTML = 'Cursor';
    buildingTuile.appendChild(tuileName);

    // Créer une div enfant avec la class "cost"
    let tuileCost = document.createElement('div');
    tuileCost.classList = 'cost';
    tuileCost.innerHTML = 15;
    buildingTuile.appendChild(tuileCost);

    // Créer une div enfant avec la class "number"
    let tuileNumber = document.createElement('div');
    tuileNumber.classList = 'number';
    buildingTuile.appendChild(tuileNumber);

    // Ajouter la div "buildingTuile" à la div "buildings"
    buildings.appendChild(buildingTuile);
}