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

const data = 'https://raw.githubusercontent.com/EduardOrellana/wdd231/main/chamber/data/members.json';


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
        let space = document.createElement('br')

        //Content

        name.textContent = `Business: ${element.name}`;
        
        portrait.setAttribute("src", element.image);
        portrait.setAttribute("alt", "logo business");
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "150");

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
        card.appendChild(space)
        card.appendChild(space)
        card.appendChild(space)

        //addint into the directory section:
        directory.appendChild(card)


    });
}

getDataDirectory();