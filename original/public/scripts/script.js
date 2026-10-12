const telephoneNumberElements = document.getElementsByClassName("tel");
const mailElements = document.getElementsByClassName("mail");
const locationElements = document.getElementsByClassName("location");

const weekdaysElements = document.getElementsByClassName("weekdays");
const saturdayElements = document.getElementsByClassName("saturday");
const sundayElements = document.getElementsByClassName("sunday");

let jsonProducts = {};

/*

    Html for img products //e.g. showcase and best seller products

*/
function generateHtmlForImgProducts(imgProducts) {
    let productsWithImgHtml = "";
    imgProducts.forEach(imgProduct => {
        productsWithImgHtml += `
            <div class="gallery-item">
                    <img src="${imgProduct.img}" alt="${imgProduct.name}">
                <div class="img-desc">${imgProduct.name} <u class="prices" data-productName="${imgProduct.name}">${imgProduct.price}</u>&nbsp;kr</div>
            </div>`;
    });
    gallery.innerHTML = productsWithImgHtml;
}

/*

    Html for contacts

*/
function formatTelephoneNumber(rawTelephoneNumber) {
    const onlyDigits = rawTelephoneNumber.replace(/\D/g, "");
    const withoutCountry = onlyDigits.slice(2);
    const formattedTelNumber = withoutCountry.slice(0, 3) + " - " + withoutCountry.slice(3);
    return formattedTelNumber;
}

/*

    Html for contacts

*/
function generateHtmlForContacts(contacts) {
    Array.from(telephoneNumberElements).forEach(telephoneNumberElement => {
        telephoneNumberElement.innerHTML = `<a href="tel:${contacts.tel}">${formatTelephoneNumber(contacts.tel)}</a>`;
    });
    Array.from(mailElements).forEach(mailElement => {
        mailElement.innerHTML = `<a href="mailto:${contacts.mail}">${contacts.mail}</a>`;
    });
    Array.from(locationElements).forEach(locationElement => {
        locationElement.innerHTML = `${contacts.address}, ${contacts.postalCode} ${contacts.city}`;
    });
}

/*

    Html for openingHours

*/
function generateHtmlForOpeningHours(openingHours) {
    Array.from(weekdaysElements).forEach(weekdaysElement => {
        weekdaysElement.innerHTML = `Vardagar: ${openingHours.weekdays}`;
    });
    Array.from(saturdayElements).forEach(saturdayElement => {
        saturdayElement.innerHTML = `Lördagar: ${openingHours.saturday}`;
    });
    Array.from(sundayElements).forEach(sundayElement => {
        sundayElement.innerHTML = `Söndagar: ${openingHours.sunday}`;
    });
}

/*

    Get products from Json and display html

*/
async function loadJsonAndDisplay() {
    const contactsResponse = await fetch("../data/contacts.json");
    const contacts = await contactsResponse.json();

    const openingHoursResponse = await fetch("../data/openingHours.json");
    const openingHours = await openingHoursResponse.json();

    generateHtmlForContacts(contacts);
    generateHtmlForOpeningHours(openingHours);
}


loadJsonAndDisplay();