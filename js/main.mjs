import Bakery from "./classes/bakery.mjs"; 
// import Building from "./classes/building.mjs";
import {updateBakery} from "./dom/dom-bakery.mjs";
import {updateTuile} from "./dom/dom-tuiles.mjs";

const newBakery = new Bakery();
updateBakery(newBakery);

updateTuile();