import Bakery from "./classes/bakery.mjs"; 

// Importer la fonction "updateBakery(element)"
import {updateBakery} from "./dom/dom-bakery.mjs";

// Création de la constante "newBakery" pour "stocker" les valeurs de bakery.mjs et pouvoir les utiliser
const newBakery = new Bakery();
console.log(newBakery)

// Passer "newBakery" en paramètre pour transformer "element" avec les valeurs de "bakery.mjs"
updateBakery(newBakery);




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






// // A décommenter après
// import Building from "./classes/building.mjs";