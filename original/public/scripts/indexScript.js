const prices = document.getElementsByClassName("prices");
const gallery = document.getElementById("gallery");
const productTable = document.getElementById("productTable");

/*

    Get products from Json and display html

*/
async function loadJsonAndDisplay() {
    const response = await fetch("../data/products.json");
    jsonProducts = await response.json();


    const bestSellerProducts = [];

    Object.values(jsonProducts).forEach(productCategory => {
        productCategory.products.forEach(product => {
            if (product.isBestSeller && product.img !== false && product.img !== "") {
                bestSellerProducts.push(product);
            }
        });
    });

    generateHtmlForImgProducts(bestSellerProducts);

    if (localStorage.getItem("taxes") === "excludeTaxes") {
        toggleShowWithoutTaxes.checked = true;
        changePrices();
    }
}


loadJsonAndDisplay();