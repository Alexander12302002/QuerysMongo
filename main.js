import { movis } from './js/module/movis.js';


let mongo = new movis()
console.log(await mongo.getMovisWith200CopyAndBluray());