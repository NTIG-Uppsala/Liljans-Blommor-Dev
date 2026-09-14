const prices = document.getElementsByClassName("prices");
const gallery = document.getElementById("gallery");
const productTable = document.getElementById("productTable");

// var jsonData = {}; is defines the the script.js script

/*

    Html for products

*/

function generateHtmlForBestSellers(productsWithImg) {

    let productsWithImgHtml = "";

    productsWithImg.forEach(productWithImg => {

        if (productWithImg.isBestSeller) {
            productsWithImgHtml += `
                <div class="gallery-item">
                    <a class="inactiveLink" target="_blank" href="${productWithImg.img}">
                        <img src="${productWithImg.img}" alt="${productWithImg.name}">
                    </a>
                    <div class="img-desc">${productWithImg.name} <u class="prices" data-productName="${productWithImg.name}">${productWithImg.price}</u>&nbsp;kr</div>
                </div>`
        }
    });

    gallery.innerHTML = productsWithImgHtml;

}

/*

    Get products from Json and display html

*/
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

    generateHtmlForBestSellers(productsWithImg)

    if (localStorage.getItem("taxes") === "excludeTaxes") {
        toggleShowWithoutTaxes.checked = true;
        changePrices();
    }

}


loadJsonAndDisplay();


