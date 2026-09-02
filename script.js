const button = document.getElementById("toggle");
const prices = document.getElementsByClassName("prices");


const change_prices = () => {
    console.log("Debugging - function: change_prices")
    console.log(`Debug: Taxes: ${localStorage.getItem("taxes")}`);


    if (localStorage.getItem("taxes") === "exkl") {
        for (let i = 0; i < prices.length; i++) {

            console.log(`Debug: Inkl: ${prices.item(i).innerHTML}`);

            price_without_taxes = parseFloat(prices.item(i).innerHTML);
            price_with_taxes = price_without_taxes * 1.25;
            prices.item(i).innerHTML = price_with_taxes;
        }

        localStorage.setItem("taxes", "inkl");
        button.innerHTML = "Exkludera moms";

    } else {
        for (let i = 0; i < prices.length; i++) {

            console.log(`Debug: Exkl: ${prices.item(i).innerHTML}`);

            price_with_taxes = parseFloat(prices.item(i).innerHTML);
            price_without_taxes = price_with_taxes / 1.25;
            prices.item(i).innerHTML = price_without_taxes;
        }

        localStorage.setItem("taxes", "exkl");
        button.innerHTML = "Inkludera moms";

    }
}


if (localStorage.getItem("taxes") === "exkl") {
    localStorage.setItem("taxes", "inkl");
    change_prices();
}


button.addEventListener("click", change_prices);



const gallery = document.getElementById("gallery");
const table = document.getElementById("table")


function generateHtmlForProductsWithImage(productsWithImg) {
    let productsWithImgHtml = "";
    for (i in productsWithImg) {
        productsWithImgHtml += `
            <div class="gallery-item">
                <a target="_blank" href="${productsWithImg[i].img}">
                    <img src="${productsWithImg[i].img}" alt="${productsWithImg[i].name}">
                </a>
                <div class="img-desc">${productsWithImg[i].name}	<u class="prices">${productsWithImg[i].price}</u> kr</div>
            </div>`
    }
    gallery.innerHTML = productsWithImgHtml;
}

function generateHtmlForProductsWithoutImage(productsWithoutImg) {
    let productsWithoutImgHtml = "";
    for (i in productsWithoutImg) {
        if (productsWithoutImg[i].headline) {
            productsWithoutImgHtml += `
                <tr>
                    <th>${productsWithoutImg[i].headline}</th>
                    <th>${productsWithoutImg[i].price}</th>
                </tr>`
        } else if (productsWithoutImg[i].name) {
            productsWithoutImgHtml += `
                <tr>
                    <td>${productsWithoutImg[i].name}</td>
                    <td><u class="prices">${productsWithoutImg[i].price}</u> kr</td>
                </tr>`
        }
    }
    table.innerHTML = productsWithoutImgHtml;
}

async function loadProductsFromJsonAndDisplay() {
    const response = await fetch("/data/products.json");
    const data = await response.json();
    const productsWithImg = [];
    const productsWithoutImg = [];

    for (i in data.products) {
        if (data.products[i].img) {
            productsWithImg.push(data.products[i]);
        } else {
            productsWithoutImg.push(data.products[i]);
        }
    }
    generateHtmlForProductsWithImage(productsWithImg);
    generateHtmlForProductsWithoutImage(productsWithoutImg);
}

loadProductsFromJsonAndDisplay();
