const prices = document.getElementsByClassName("prices");
const gallery = document.getElementById("gallery");
const productTable = document.getElementById("productTable");



function generateHtmlProducts(productCategories) {
    let productsHtml = "";

    productCategories.forEach(productCategory => {
        productsHtml += `
                <tr>
                    <th>${productCategory.categoryName}</th>
                    <th>Pris</th>
                </tr>
            `
        productCategory.products.forEach(product => {
            productsHtml += `
                <tr>
                    <td>${product.name}</td>
                    <td><u class="prices" data-productName="${product.name}">${product.price}</u>&nbsp;kr</td>
                </tr>
            `
        })
    })

    productTable.innerHTML = productsHtml;
}

async function loadJsonAndDisplay() {
    const response = await fetch("../../data/products.json");
    const jsonProducts = await response.json();

    const showcaseProducts = [];
    const productCategories = [];

    Object.values(jsonProducts).forEach(productCategory => {
        productCategories.push(productCategory);
        productCategory.products.forEach(product => {
            if (product.isShowcase && product.img !== false && product.img !== "") {
                showcaseProducts.push(product);
            }
        })
    })

    generateHtmlForImgProducts(showcaseProducts);
    generateHtmlProducts(productCategories);

    if (localStorage.getItem("taxes") === "excludeTaxes") {
        toggleShowWithoutTaxes.checked = true;
        changePrices();
    }

}

loadJsonAndDisplay();
