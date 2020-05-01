import Bakery from "./classes/bakery.mjs"; 
import Building from "./classes/building.mjs";

// Importer la fonction "updateBakery(element)"
import updateBakery from "./dom/dom-bakery.mjs";
const newBakery = new Bakery();
updateBakery(newBakery);

// Importer la fonction "updateTuile()"
import updateTuile from "./dom/dom-tuiles.mjs";
const newBuilding = new Building({name, description, cookiesPerSecond, cost}, 1);
console.log(newBuilding);
updateTuile(newBuilding);


// // Pour séléctionner le nom de notre Bakerie
// let bakeryName = document.querySelector('#bakery h2');
// console.log('Nom de notre Bakery : ' + bakeryName);
// bakeryName.textContent = newBakery.name;

// // Pour séléctionner la valeur "?" de "cookies"
// let cookiesStock = document.querySelector('#cookiesStock span')
// console.log('La valeur du stock de cookies : ' + cookiesStock);
// cookiesStock.textContent = newBakery.cookies;

// // Pour séléctionner la valeur "?" de "cookies per second :"
// let cookiesPerSecond = document.querySelector('#cookiesPerSecond span')
// console.log('La valeur de cookies per second : ' + cookiesPerSecond);
// cookiesPerSecond.textContent = newBakery.coockiesPerSecond;