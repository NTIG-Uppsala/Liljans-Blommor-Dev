import { Products } from "@/app/lib/data";
import { ReactElement } from "react";
import Image from "next/image"
import { randomUUID } from "crypto";

export default function ProductsWithImg() {

    let jsonProducts = Products

    function generateHtmlForImgProducts(imgProducts: Object[]) {

        let productsWithImgHtml: ReactElement<any, any>[] = [];
        let i = 0;
        imgProducts.forEach((imgProduct: any) => {
            productsWithImgHtml.push(
                <div key={i++} className="gallery-item">
                    <Image src={imgProduct.img} width={500} height={500} alt={imgProduct.name} />
                    <div className="img-desc">{imgProduct.name} <u className="prices" data-productname={imgProduct.name}>{imgProduct.price}</u>&nbsp;kr</div>
                </div>);
        });

        return (productsWithImgHtml);
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
                {generateHtmlForImgProducts(showcaseProducts)}
            </>

        );

        // if (localStorage.getItem("taxes") === "excludeTaxes") {
        //     toggleShowWithoutTaxes.checked = true;
        //     changePrices();
        // }
    }


    return loadJsonAndDisplay();



}