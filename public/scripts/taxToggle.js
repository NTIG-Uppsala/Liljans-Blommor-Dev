// const prices = document.getElementsByClassName("prices"); is called in the products or index scripts
const toggleShowWithoutTaxes = document.getElementById("taxToggle");
// const gallery = document.getElementById("gallery"); is called in the products or index scripts
// const productTable = document.getElementById("productTable"); is called in the products or index scripts

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
            Object.values(jsonProducts).forEach(productCategory => {
                productCategory.products.forEach(product => {
                    const productNameHtml = price.getAttribute("data-productName");
                    const productNameJson = product.name;
                    if (productNameHtml === productNameJson) {
                        price.innerHTML = product.price;
                    }
                });
            });
        });
        localStorage.setItem("taxes", "includeTaxes");
    }
}

toggleShowWithoutTaxes.addEventListener('change', changePrices);    