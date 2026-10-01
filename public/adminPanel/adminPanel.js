let jsonData = {};

async function loadJsonData() {
    const contactsResponse = await fetch("../data/contacts.json");
    const contactsData = await contactsResponse.json();
    jsonData.contacts = contactsData;

    const openingHoursResponse = await fetch("../data/openingHours.json");
    const openingHoursData = await openingHoursResponse.json();
    jsonData.openingHours = openingHoursData;

    const postalCodesResponse = await fetch("../data/postalCodes.json");
    const postalCodesData = await postalCodesResponse.json();
    jsonData.postalCodes = postalCodesData;

    const productsResponse = await fetch("../data/products.json");
    const productsData = await productsResponse.json();
    jsonData.products = productsData;
}





// TEMP - for development:

const temp_debugging = document.getElementById("temp_debugging");

async function TEMP_DisplayJsonData() {
    await loadJsonData();

    temp_debugging.innerHTML += `<br><br><hr><h3>Temp debugging <i>(delete later)</i></h3>`;
    Object.keys(jsonData).forEach(json => {
        temp_debugging.innerHTML += `<h4>${json}</h4>`;
        Object.values(jsonData[json]).forEach(object => {
            temp_debugging.innerHTML += `${object} <br>`;
        });
    });
}

TEMP_DisplayJsonData();