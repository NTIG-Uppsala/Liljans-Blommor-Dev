const prices = document.getElementsByClassName("prices");
const toggleShowWithoutTaxes = document.getElementById("taxToggle");
const gallery = document.getElementById("gallery");
const productTable = document.getElementById("productTable");

const telephoneNumberElements = document.getElementsByClassName("tel");
const mailElements = document.getElementsByClassName("mail");
const locationElements = document.getElementsByClassName("location")

const weekdaysElements = document.getElementsByClassName("weekdays");
const saturdayElements = document.getElementsByClassName("saturday");
const sundayElements = document.getElementsByClassName("sunday");

let jsonData = {};

/*

    Changeprices

*/
async function changePrices() {
    if (toggleShowWithoutTaxes.checked) {
        Array.from(prices).forEach(price => {
            const priceWithTaxes = parseInt((price).innerHTML);
            const priceWithoutTaxes = priceWithTaxes / 1.25;
            price.innerHTML = Math.round(priceWithoutTaxes);
        });
        localStorage.setItem("taxes", "excludeTaxes");
    } else {
        Array.from(prices).forEach(price => {
            jsonData.products.forEach(product => {
                const productNameHtml = price.getAttribute("data-productName");
                const productNameJson = product.name;
                if (productNameHtml === productNameJson) {
                    price.innerHTML = product.price;
                }
            });
        });
        localStorage.setItem("taxes", "includeTaxes");
    }
}

/*

    Html for products

*/
function generateHtmlForProductsWithImage(productsWithImg) {
    let productsWithImgHtml = "";
    productsWithImg.forEach(productWithImg => {
        productsWithImgHtml += `
            <div class="gallery-item">
                <a class="inactiveLink" target="_blank" href="${productWithImg.img}">
                    <img src="${productWithImg.img}" alt="${productWithImg.name}">
                </a>
                <div class="img-desc">${productWithImg.name} <u class="prices" data-productName="${productWithImg.name}">${productWithImg.price}</u>&nbsp;kr</div>
            </div>`
    });
    gallery.innerHTML = productsWithImgHtml;
}

function generateHtmlForProductsWithoutImage(productsWithoutImg) {
    let productsWithoutImgHtml = "";
    productsWithoutImg.forEach(productWithoutImg => {
        if (productWithoutImg.headline) {
            productsWithoutImgHtml += `
                <tr>
                    <th>${productWithoutImg.headline}</th>
                    <th>${productWithoutImg.price}</th>
                </tr>`
        } else if (productWithoutImg.name) {
            productsWithoutImgHtml += `
                <tr>
                    <td>${productWithoutImg.name}</td>
                    <td><u class="prices" data-productName="${productWithoutImg.name}">${productWithoutImg.price}</u>&nbsp;kr</td>
                </tr>`
        }
    });
    productTable.innerHTML = productsWithoutImgHtml;
}

/*

    Html for contacts

*/
function generateHtmlForContacts() {
    Array.from(telephoneNumberElements).forEach(telephoneNumberElement => {
        telephoneNumberElement.innerHTML = `<a href="tel:+46${jsonData.contacts.tel}">${jsonData.contacts.tel}</a>`;
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
        if (gallery.getAttribute("data-product-page") === "loadProducts") {
            const productsWithImg = [];
            const productsWithoutImg = [];

            jsonData.products.forEach(product => {
                if (product.img) {
                    productsWithImg.push(product);
                } else {
                    productsWithoutImg.push(product);
                }
            });
            await generateHtmlForProductsWithImage(productsWithImg);
            await generateHtmlForProductsWithoutImage(productsWithoutImg);

            if (localStorage.getItem("taxes") === "excludeTaxes") {
                toggleShowWithoutTaxes.checked = true;
                changePrices();
            }
        }
    } catch (error) {
        console.error(error);
    }


    await generateHtmlForContacts();
    await generateHtmlForOpeningHours();
}


loadJsonAndDisplay();

if (toggleShowWithoutTaxes) {
    toggleShowWithoutTaxes.addEventListener('change', changePrices);
}
