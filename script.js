const prices = document.getElementsByClassName("prices");
const toggleShowWithoutTaxes = document.getElementById("taxToggle");
const gallery = document.getElementById("gallery");
const productTable = document.getElementById("productTable");

let jsonData = {};

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

async function loadProductsFromJsonAndDisplay() {
    const response = await fetch("../data/products.json");
    jsonData = await response.json();
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

if (gallery.getAttribute("data-product-page") === "loadProducts") {
    loadProductsFromJsonAndDisplay();
}



toggleShowWithoutTaxes.addEventListener('change', changePrices);