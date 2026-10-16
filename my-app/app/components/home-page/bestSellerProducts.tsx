import { Products } from "@/app/lib/data";
import { ReactElement } from "react";
import Image from "next/image"


export default function ProductsShowcase() {

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