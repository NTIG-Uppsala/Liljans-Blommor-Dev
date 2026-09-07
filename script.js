const prices = document.getElementsByClassName("prices");
const toggle = document.getElementById("toggle");
const gallery = document.getElementById("gallery");
const table = document.getElementById("table");

async function changePrices() {
    if (toggle.checked) {
        for (let i = 0; i < prices.length; i++) {
            const priceWithTaxes = parseInt(prices.item(i).innerHTML);
            const priceWithoutTaxes = priceWithTaxes / 1.25;
            prices.item(i).innerHTML = Math.round(priceWithoutTaxes);
        }
        localStorage.setItem("taxes", "excludeTaxes");
    } else {
        const response = await fetch("../data/products.json");
        const data = await response.json();
        for (let i = 0; i < prices.length; i++) {
            for (jsonIndex in data.products) {
                const productNameHtml = prices.item(i).getAttribute("data-productName");
                const productNameJson = data.products[jsonIndex].name;
                if (productNameHtml === productNameJson) {
                    prices.item(i).innerHTML = data.products[jsonIndex].price;
                }
            }
        }
        localStorage.setItem("taxes", "includeTaxes");
    }
}

function generateHtmlForProductsWithImage(productsWithImg) {
    let productsWithImgHtml = "";
    for (i in productsWithImg) {
        productsWithImgHtml += `
            <div class="gallery-item">
                <a class="inactiveLink" target="_blank" href="${productsWithImg[i].img}">
                    <img src="${productsWithImg[i].img}" alt="${productsWithImg[i].name}">
                </a>
                <div class="img-desc">${productsWithImg[i].name} <u class="prices" data-productName="${productsWithImg[i].name}">${productsWithImg[i].price}</u> kr</div>
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
                    <td><u class="prices" data-productName="${productsWithoutImg[i].name}">${productsWithoutImg[i].price}</u> kr</td>
                </tr>`
        }
    }
    table.innerHTML = productsWithoutImgHtml;
}

async function loadProductsFromJsonAndDisplay() {
    const response = await fetch("../data/products.json");
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

if (gallery.getAttribute("data-product-page") === "loadProducts") {
    loadProductsFromJsonAndDisplay();
}

if (localStorage.getItem("taxes") === "excludeTaxes") {
    toggle.checked = true;
    setTimeout(changePrices, 100);
}

toggle.addEventListener('change', changePrices);