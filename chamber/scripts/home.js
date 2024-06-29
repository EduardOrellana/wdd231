import Footer_and_HamBurger from "./base.js";

const principalDynamic = new Footer_and_HamBurger();

principalDynamic.setfooter();
principalDynamic.refreshPage();
principalDynamic.setHambutton();


// document.addEventListener("DOMContentLoaded", () => {
//     document.body.classList.add('loaded');
// })


//Three Business
const data = 'https://raw.githubusercontent.com/EduardOrellana/wdd231/main/chamber/data/members.json';

//API Weather----------------------------------------------------------------------------------------------
const weatherContainer = document.querySelector('#weather');
const weatherIcon = document.querySelector('#icon-weather');

// 14.529898598648922, -90.59526334935519

let lat = 14.5269;
let lon = -90.5875;

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=8aa0b13698894c5f56ccba0bd220bcab`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log(response.ok);
            const data = await response.json();
            console.log(data);
            displayResultsWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResultsWeather(data) {
    //URL of the Icon
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', 'Icon');

    //List with the weather information-----------------------------------------------------------------------
    const grades = document.createElement('ul');
    const kindWeather = document.createElement('ul');
    const high = document.createElement('ul');
    const low = document.createElement('ul');
    const humidity = document.createElement('ul');
    const sunrise = document.createElement('ul');
    const sunset = document.createElement('ul');

    //Set and write the values---------------------------------------------------------------
    grades.textContent = `${Math.round(data.main.temp)}° F`;
    kindWeather.textContent = data.weather[0].description;
    high.textContent = `High: ${Math.round(data.main.temp_max)}°`;
    low.textContent = `Low: ${Math.round(data.main.temp_min)}°`;
    humidity.textContent = `Humidity: ${data.main.humidity}`;
    sunrise.textContent = `Sunrise: ${timing(data.sys.sunrise)}`;
    sunset.textContent = `Sunset: ${timing(data.sys.sunset)}`;

    weatherContainer.appendChild(grades);
    weatherContainer.appendChild(kindWeather);
    weatherContainer.appendChild(high);
    weatherContainer.appendChild(low);
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(sunrise);
    weatherContainer.appendChild(sunset);
}

let timing = (sunrise_or_sunset) => {
    const date = new Date(sunrise_or_sunset *1000);
    const hrs = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formatting = `${hrs.toString().padStart(2, '0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

    console.log(`the time is: ${formatting}`);

    return formatting
}

const directory = document.querySelector('#contacts');

async function getDataDirectory() {
    try {
        const response = await fetch(data);
        if (!response.ok){
            throw new Error('Error al cargar los datos');
        }
        const objectData = await response.json();
        // console.log(objectData.directory);
        displayDirectory(objectData.directory);
    } catch(error) {
        console.error('Error with the data json', error)
    }
}
const displayDirectory = (companies) => {

    let count = 0;

    companies.forEach(element => {
        //Creating the cards per business
        if (count < 3){
            count ++;
            let card = document.createElement('div');
            let subcard = document.createElement('div');
            let subcard2 = document.createElement('div');

            let name = document.createElement('h3');
            let portrait = document.createElement('img');
            let number = document.createElement('p');
            let address = document.createElement('p');
            let website = document.createElement('a');
            // let website = document.createElement('p');
            let kind = document.createElement('p');
            let space = document.createElement('br')

    
            //Content
    
            name.textContent = `Business: ${element.name}`;
            
            subcard.setAttribute("id", "subcard-business");
            subcard2.setAttribute("id", "subcard2");

            portrait.setAttribute("src", element.image);
            portrait.setAttribute("alt", "logo business");
            portrait.setAttribute("loading", "lazy");
            portrait.setAttribute("width", "150");
            portrait.setAttribute("height", "100");
    
            website.setAttribute('href', element.website_url)
            website.setAttribute('target', '_blank')
            website.textContent = `Web Site`;
            number.textContent = `${element.phone_number}`;
            address.textContent = `${element.address}`;
            kind.textContent = `Industry: ${element.type}`;
    
            card.appendChild(name);
            card.appendChild(subcard);
            subcard.append(subcard2);

            subcard.appendChild(portrait);
            subcard2.appendChild(address);
            subcard2.appendChild(number);
            subcard2.appendChild(kind);
            subcard2.appendChild(website);
            subcard2.appendChild(space)
            subcard2.appendChild(space)

            
    
            //adding into the directory section:
            directory.appendChild(card)


        }
    });
}


getDataDirectory();