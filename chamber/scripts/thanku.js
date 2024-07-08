import Footer_and_HamBurger  from "./base.js";

const principalDynamic = new Footer_and_HamBurger();

principalDynamic.setfooter();
principalDynamic.refreshPage();
principalDynamic.setHambutton();

/////////////////////////////////////////////////////////////////////////////
const url = window.location.href;
const container = document.querySelector('#thanks-section');
console.log(url);

//Divide the url

const infoFromForm = url.split('?');
console.log(infoFromForm);

const formData = infoFromForm[1].split('&');
console.log(formData);

function show(word) {
    let result = '';
    console.log(word);
    
    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(word)){
            result = element.split('=');
            result = result[1].replace('+', ' '); //replace the + sign
        } //end of the if
    })
    return(result);
}

function date(word) {
    let result = '';
    let end = '';
    console.log(word);

    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(word)) {
            result = element.split('=')[1];
            result = decodeURIComponent(result);
            end = result.replace('+', ' ');
            console.log(end);
        } // end of the if
    });
    return end;
}

function email(word){
    let result = '';
    console.log(word);
    
    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(word)){
            result = element.split('=');
            result = result[1].replace('%40', '@'); //replace the + sign
        } //end of the if
    })
    return(result);
}

container.innerHTML = `
    <h2>Thanks for your submition ${show('first')}</h2>
    <p><br>We have this information:</p><br>
    <ul id="list-info">
        <li>First Name: ${show('first')}</li>
        <li>Last Name: ${show('last')}</li>
        <li>Email: ${email('email')}</li>
    </ul>

`;