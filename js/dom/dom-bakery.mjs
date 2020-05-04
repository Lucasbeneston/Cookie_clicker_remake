import {mecanismeTuiles} from '../dom/dom-tuiles.mjs'

let cookiesStock = document.querySelector('#cookiesStock span')

function entierAleatoire(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const updateBakery = (monObjet) => {

    // Pour séléctionner le titre h2 de l'id bakery
    let bakeryName = document.querySelector('#bakery h2');
    bakeryName.innerHTML = monObjet.name;

    // Pour séléctionner la valeur "?" de "cookies"
    cookiesStock.innerHTML = monObjet.cookies;

    // Pour séléctionner la valeur "?" de "cookies per second :"
    let cookiesPerSecond = document.querySelector('#cookiesPerSecond span')
    cookiesPerSecond.innerHTML = monObjet.cookiesPerSecond;
}

export const clickCookie = (monObjet) => {
    let bigCookie = document.getElementById('bigCookie');

    bigCookie.addEventListener('click', (event) => {
        cookiesStock.innerHTML = monObjet.bakeCookies();

        // Création de la div + affichage dans BigCookie
        let animationText = document.createElement('div');
        animationText.classList = "animationText";
        animationText.innerHTML = "+1";
        bigCookie.appendChild(animationText);
        animationText.style.top = event.clientY + "px";
        animationText.style.left = event.clientX + entierAleatoire(0, 5) + "px";

        // Créer une balise "audio"
        let audio = document.createElement('audio');
        bigCookie.appendChild(audio);

        // Aouter du texte 
        audio.src = `/assets/sounds/click${entierAleatoire(1, 7)}.mp3`
        audio.play();

        bigCookie.addEventListener('animationend', () =>{
            bigCookie.removeChild(animationText);
            bigCookie.removeChild(audio);
        })

        mecanismeTuiles(monObjet)
    })}
