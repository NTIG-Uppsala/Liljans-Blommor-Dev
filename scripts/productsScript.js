const prices = document.getElementsByClassName("prices");
const gallery = document.getElementById("gallery");
const productTable = document.getElementById("productTable");


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

async function loadJsonAndDisplay() {
    const response = await fetch("../data/data.json");
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

    generateHtmlForProductsWithImage(productsWithImg);
    generateHtmlForProductsWithoutImage(productsWithoutImg);

    if (localStorage.getItem("taxes") === "excludeTaxes") {
        toggleShowWithoutTaxes.checked = true;
        changePrices();
    }

}

loadJsonAndDisplay();
