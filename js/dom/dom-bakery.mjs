// Exporter "updateBakery" dans main.mjs
export default function updateBakery(element){

    // Pour séléctionner le titre h2 de l'id bakery
    let bakeryName = document.querySelector('#bakery h2');
    console.log('Nom de notre Bakery : ' + bakeryName);
    bakeryName.textContent = element.name;

    // Pour séléctionner la valeur "?" de "cookies"
    let cookiesStock = document.querySelector('#cookiesStock span')
    console.log('La valeur du stock de cookies : ' + cookiesStock);
    cookiesStock.textContent = element.cookies;

    // Pour séléctionner la valeur "?" de "cookies per second :"
    let cookiesPerSecond = document.querySelector('#cookiesPerSecond span')
    console.log('La valeur de cookies per second : ' + cookiesPerSecond);
    cookiesPerSecond.textContent = element.coockiesPerSecond;
}