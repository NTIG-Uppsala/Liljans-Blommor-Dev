import { Products } from "@/app/lib/data";
import { ReactElement } from "react";

export default function ProductsWithoutImg() {

    let jsonProducts = Products


    function generateHtmlProducts(productCategories: Object[]) {
        let productsHtml: ReactElement<any, any>[] = [];

        productCategories.forEach((productCategory: any) => {
            productsHtml.push(
                <tr>
                    <th>{productCategory.categoryName}</th>
                    <th>Pris</th>
                </tr>);
            productCategory.products.forEach((product: any) => {
                productsHtml.push(
                    <tr>
                        <td>{product.name}</td>
                        <td><u className="prices" data-productName="${product.name}">{product.price}</u>&nbsp;kr</td>
                    </tr>);

            });
        });

        return (productsHtml);
    }


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