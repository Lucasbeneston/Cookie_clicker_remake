import Bakery from "./classes/bakery.mjs"; 
import Building from "./classes/building.mjs";
import {clickCookie} from "./dom/dom-bakery.mjs";

import {updateBakery} from "./dom/dom-bakery.mjs";
import {updateTuile} from "./dom/dom-tuiles.mjs";
import { buyTuiles } from "./dom/dom-tuiles.mjs"

const nomObjetBakery = new Bakery();
updateBakery(nomObjetBakery);

const monObjetBuilding = new Building();

clickCookie(nomObjetBakery);

updateTuile();

buyTuiles(monObjetBuilding);