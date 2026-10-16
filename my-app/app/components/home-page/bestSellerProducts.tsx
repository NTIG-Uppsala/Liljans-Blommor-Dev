import { Products } from "@/app/lib/data";
import { generateHtmlForImgProducts } from "@/app/lib/products";


export default function ProductsShowcase() {

    let jsonProducts = Products;

    async function loadJsonAndDisplay() {

        const bestSellerProducts: object[] = [];

        Object.values(jsonProducts).forEach(productCategory => {
            productCategory.products.forEach(product => {
                if (product.isBestSeller && product.img !== "") {
                    bestSellerProducts.push(product);
                }
            });
        });

        return (

            <>
                {generateHtmlForImgProducts(bestSellerProducts)};
            </>

        );

        // if (localStorage.getItem("taxes") === "excludeTaxes") {
        //     toggleShowWithoutTaxes.checked = true;
        //     changePrices();
        // }
    }


    return loadJsonAndDisplay();



}