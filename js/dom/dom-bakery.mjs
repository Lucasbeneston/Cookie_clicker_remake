// Exporter "updateBakery" dans main.mjs
export const updateBakery = (element) => {

    // Pour séléctionner le titre h2 de l'id bakery
    let bakeryName = document.querySelector('#bakery h2');
    bakeryName.textContent = element.name;

    // Pour séléctionner la valeur "?" de "cookies"
    let cookiesStock = document.querySelector('#cookiesStock span')
    cookiesStock.textContent = element.cookies;

    // Pour séléctionner la valeur "?" de "cookies per second :"
    let cookiesPerSecond = document.querySelector('#cookiesPerSecond span')
    cookiesPerSecond.textContent = element.coockiesPerSecond;
}