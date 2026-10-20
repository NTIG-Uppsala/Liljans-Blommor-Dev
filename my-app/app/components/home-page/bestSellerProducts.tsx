import { Products } from "@/app/lib/data";
import { generateHtmlForImgProducts } from "@/app/lib/products";


export default function ProductsShowcase(isChecked: any) {

    let jsonProducts = Products;

    function loadJsonAndDisplay() {

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
                {generateHtmlForImgProducts(bestSellerProducts, isChecked.isChecked)};
            </>

        );

        // if (localStorage.getItem("taxes") === "excludeTaxes") {
        //     toggleShowWithoutTaxes.checked = true;
        //     changePrices();
        // }
    }


    return loadJsonAndDisplay();



}