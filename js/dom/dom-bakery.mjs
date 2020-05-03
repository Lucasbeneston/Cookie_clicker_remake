let cookiesStock = document.querySelector('#cookiesStock span')

export const updateBakery = (element) => {

    // Pour séléctionner le titre h2 de l'id bakery
    let bakeryName = document.querySelector('#bakery h2');
    bakeryName.innerHTML = element.name;

    // Pour séléctionner la valeur "?" de "cookies"
    cookiesStock.innerHTML = element.cookies;

    // Pour séléctionner la valeur "?" de "cookies per second :"
    let cookiesPerSecond = document.querySelector('#cookiesPerSecond span')
    cookiesPerSecond.innerHTML = element.cookiesPerSecond;
}

export const clickCookie = (element) => {
    let bigCookie = document.getElementById('bigCookie');

    bigCookie.addEventListener('click', (event) => {
        cookiesStock.innerHTML = element.bakeCookies();

        // Création de la div + affichage dans BigCookie
        let animationText = document.createElement('div');
        animationText.classList = "animationText";
        animationText.innerHTML = "+1";
        bigCookie.appendChild(animationText);

        animationText.style.top = event.clientY + "px";
        animationText.style.left = event.clientX + "px";
    })}