import generalData from "./base.js";
import { Footer_and_HamBurger, DisplayFetch } from "./base.js";

const principalDynamic = new Footer_and_HamBurger();

principalDynamic.setfooter();
principalDynamic.refreshPage();
principalDynamic.setHambutton();

//Main Script//////////////////////////////////////////////////////
const url_cars = generalData.getJSON_CARS();

const ActionAPI = new DisplayFetch(url_cars);
const containerCars = document.querySelector(".cars-container");

function displayCars(object) {
    let count = 0;
    
    object.forEach(element => {
        if (count < 3){
            count ++;
            let imgage = document.createElement('img');
        
            imgage.setAttribute('src', element.ilustration);
            imgage.setAttribute('alt', `${element.brand}`);
            imgage.setAttribute('width', 200);
            imgage.setAttribute('height', 200);
            imgage.setAttribute('loading', 'lazy');
        
            containerCars.appendChild(imgage);
            }});
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPictures(object) {

    for (let i = 0; i < 3; i++){
        let index = getRandomNumber(0, object.length - 1);
        // console.log(index);
        let imgage = document.createElement('img');
        // const item = object[index];
        // console.log(item);
        
        imgage.setAttribute('src', object[index].ilustration);
        imgage.setAttribute('alt', `${object[index].brand}`);
        imgage.setAttribute('width', 200);
        imgage.setAttribute('height', 200);
        imgage.setAttribute('loading', 'lazy');
    
        containerCars.appendChild(imgage);
    }
}

const dataC = await ActionAPI.getAPIFetch();
const totalCars = dataC.length;

console.log("Esta es mi data");
console.log(totalCars);
console.log(dataC);
// displayCars(dataC);
randomPictures(dataC);