import { Products } from "@/app/lib/data";
import { generateHtmlProducts } from "@/app/lib/products";

export default function ProductsWithoutImg() {

    let jsonProducts = Products

    async function loadJsonAndDisplay() {

        const showcaseProducts: Object[] = [];
        const productCategories: Object[] = [];

        Object.values(jsonProducts).forEach(productCategory => {
            productCategories.push(productCategory);
            productCategory.products.forEach(product => {
                if (product.isShowcase && product.img !== "") {
                    showcaseProducts.push(product);
                }
            });
        });

        return (

            <>
                {generateHtmlProducts(productCategories)}
            </>

        );

        // if (localStorage.getItem("taxes") === "excludeTaxes") {
        //     toggleShowWithoutTaxes.checked = true;
        //     changePrices();
        // }
    }


    return loadJsonAndDisplay();



}