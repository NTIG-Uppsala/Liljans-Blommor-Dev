const telephoneNumberElements = document.getElementsByClassName("tel");
const mailElements = document.getElementsByClassName("mail");
const locationElements = document.getElementsByClassName("location")

const weekdaysElements = document.getElementsByClassName("weekdays");
const saturdayElements = document.getElementsByClassName("saturday");
const sundayElements = document.getElementsByClassName("sunday");

var jsonData = {};


/*

    Html for contacts

*/

function formatTelephoneNumber(rawTelephoneNumber) {
    const onlyDigits = rawTelephoneNumber.replace(/\D/, "");
    const withoutCountry = onlyDigits.slice(2);
    const formatedTelNumber = withoutCountry.slice(0, 3) + " - " + withoutCountry.slice(3);
    return formatedTelNumber;
}

/*

    Html for contacts

*/
function generateHtmlForContacts() {
    Array.from(telephoneNumberElements).forEach(telephoneNumberElement => {
        telephoneNumberElement.innerHTML = `<a href="tel:${jsonData.contacts.tel}">${formatTelephoneNumber(jsonData.contacts.tel)}</a>`;
    });
    Array.from(mailElements).forEach(mailElement => {
        mailElement.innerHTML = `<a href="mailto:${jsonData.contacts.mail}">${jsonData.contacts.mail}</a>`;
    });
    Array.from(locationElements).forEach(locationElement => {
        locationElement.innerHTML = `${jsonData.contacts.address}, ${jsonData.contacts.postalCode} ${jsonData.contacts.city}`;
    });
}

/*

    Html for openingHours

*/
function generateHtmlForOpeningHours() {
    Array.from(weekdaysElements).forEach(weekdaysElement => {
        weekdaysElement.innerHTML = `Vardagar: ${jsonData.openingHours.weekdays}`
    });
    Array.from(saturdayElements).forEach(saturdayElement => {
        saturdayElement.innerHTML = `Lördagar: ${jsonData.openingHours.saturday}`
    });
    Array.from(sundayElements).forEach(sundayElement => {
        sundayElement.innerHTML = `Söndagar: ${jsonData.openingHours.sunday}`
    });
}

/*

    Get products from Json and display html

*/
async function loadJsonAndDisplay() {
    const response = await fetch("../data/data.json");
    jsonData = await response.json();
    try {

        const productsWithImg = [];
        const productsWithoutImg = [];

        jsonData.products.forEach(product => {
            if (product.img) {
                productsWithImg.push(product);
            } else {
                productsWithoutImg.push(product);
            }
        });

    } catch (error) {
        console.error(error);
    }


    await generateHtmlForContacts();
    await generateHtmlForOpeningHours();
    await formatTelephoneNumber(jsonData.contacts.tel);
}


loadJsonAndDisplay();




