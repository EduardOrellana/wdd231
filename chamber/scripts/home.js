import Footer_and_HamBurger from "./base.js";


const principalDynamic = new Footer_and_HamBurger();

principalDynamic.setfooter();
principalDynamic.refreshPage();
principalDynamic.setHambutton();


document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('loaded');
})
//Three Business
const data = 'https://raw.githubusercontent.com/EduardOrellana/wdd231/main/chamber/data/members.json';


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