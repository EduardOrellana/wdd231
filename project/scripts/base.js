//This file is the principal script to set the footer and the hambutton and refreshPage.

class Footer_and_HamBurger {

    setfooter(){

        const currentYear = document.getElementById('currentyear');
        const lastModified = document.getElementById('modified');
    
        currentYear.textContent = new Date().getFullYear();
        lastModified.textContent = `Last modification: ${document.lastModified}`;

    }

    setHambutton(){

        const hamButton = document.querySelector("#menu");
        const navigation = document.querySelector("#navMenu");
        
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
            this.classList.toggle('open');
        });

    }

    refreshPage(){
        const logoMain = document.querySelector("#logo-page");

        logoMain.addEventListener('click', () =>{
            location.reload();
        })
    }
}
//Class to get the api in each page without code it each time I want to
class DisplayFetch {

    constructor(url){
        this.url = url;
    }

    async getAPIFetch(){
        try {
            const response = await fetch(this.url);
            
            if (response.ok){
                // console.log(response.ok);
                let data = await response.json();

                // console.log(data);
                this.data = data.collection;

                return this.data;
            }
            else {
                throw Error(await response.text());
            }
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
}

const generalData = {

    json_cars : "https://raw.githubusercontent.com/EduardOrellana/wdd231/main/project/data/car-collection.json",

    api_weather(lat, lon, apiKey) {
        const baseURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        return baseURL;
    },

    api_weather_forecast(lat, lon, apiKey) {
        const baseURL = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        return baseURL;
    },

    getJSON_CARS() {
        return this.json_cars;
    }

}

export default generalData;
export { DisplayFetch, Footer_and_HamBurger };