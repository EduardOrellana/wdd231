//Javacript file of directory.html


//Footer & Hamburger
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Click on the logo and refreshit:

const logoMain = document.querySelector(".logo-commerce");

logoMain.addEventListener('click', () =>{
    location.reload();
})

//Get the data:

// const data = '../data/members.json';
const data = {
    "directory": [
        
        {
            "name": "Mcdonald's",
            "address": "Street one, Av. P",
            "phone_number": 50223606363,
            "website_url": "https://mcdonalds.com.gt/",
            "image": "images/mc.webp",
            "membership_level": 3,
            "type": "food"
        },
        {
            "name": "Burger King",
            "address": "Street two, Av. B",
            "phone_number": 50222000000,
            "website_url": "https://bk.gt/",
            "image": "images/burger-king.webp",
            "membership_level": 3,
            "type": "food"
        },
        {
            "name": "Little Ceaser's",
            "address": "Central Park, Av. P",
            "phone_number": 50241526398,
            "website_url": "https://www.pizzapizza.com.gt/menu/",
            "image": "images/little-ceasers.webp",
            "membership_level": 2,
            "type": "food"
        },
        {
            "name": "Como en Casa",
            "address": "The Joy 2 9-90, zone 1, SMP",
            "phone_number": 5024158796,
            "website_url": "##",
            "image": "images/como-en-casa.webp",
            "membership_level": 1,
            "type": "food"
        },
        {
            "name": "ERORELLA Full Stack and Business Intelligence",
            "address": "3.t street zone 12, SMP",
            "phone_number": 50555562439,
            "website_url": "https://www.linkedin.com/in/erick-eduardo-orellana-uma%C3%B1a-8297b1222/",
            "image": "images/erorella.webp",
            "membership_level": 2,
            "type": "Software Development & Business Services"
        },
        {
            "name": "Functional Marriages & Happy Families",
            "address": "First Avenue, central park House 3th.P",
            "phone_number": 50258555554,
            "website_url": "https://eduardorellana.github.io/wdd131/project/#",
            "image": "images/family-services.webp",
            "membership_level": 2,
            "type": "Family Services"
        },
        {
            "name": "Librano",
            "address": "Street one, Av. T",
            "phone_number": 50278966321,
            "website_url": "##",
            "image": "images/librano.webp",
            "membership_level": 1,
            "type": "Library"
        }
    ]
}

const directory = document.querySelector('#directory');

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
    companies.forEach(element => {
        //Creating the cards per business

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let number = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let kind = document.createElement('p');

        //Content

        name.textContent = `Business: ${element.name}`;
        
        portrait.setAttribute("src", element.image);
        portrait.setAttribute("alt", "logo business");
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "300");

        number.textContent = `${element.phone_number}`;
        address.textContent = `${element.address}`;
        website.textContent = `${element.website_url}`;
        kind.textContent = `Industry: ${element.type}`;


        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(kind);
        card.append(website);

        //addint into the directory section:
        directory.appendChild(card)


    });
}

getDataDirectory();