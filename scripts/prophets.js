

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(element => {
        //Create elements to add to the div.cards element

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        //build the h2 content out to show the prophet's full name
        fullName.textContent = `president: ${element.name} ${element.lastname}`
        //build the image portrait by setting all the relevant attributes

        po


    });
}

getProphetData();