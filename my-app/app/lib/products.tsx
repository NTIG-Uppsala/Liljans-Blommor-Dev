import { ReactElement } from "react";
import Image from "next/image"
import ProductPrice from "@/app/components/button/productPrice"


export function generateHtmlForImgProducts(imgProducts: Object[], isChecked: any) {


    let productsWithImgHtml: ReactElement<any, any>[] = [];
    let i = 0;
    imgProducts.forEach((imgProduct: any) => {

        let productPriceProps: any = {
            "inputProduct": imgProduct,
            "isChecked": isChecked

        }

        productsWithImgHtml.push(
            <div key={i++} className="gallery-item">
                <Image src={imgProduct.img} width={500} height={500} alt={imgProduct.name} />
                <div className="img-desc">{imgProduct.name} <u className="prices" data-productname={imgProduct.name}><ProductPrice productPriceProps={productPriceProps} /></u>&nbsp;kr</div>
            </div>);
    });

    return (productsWithImgHtml);
}

export function generateHtmlProducts(productCategories: Object[], isChecked: any) {

    let productsHtml: ReactElement<any, any>[] = [];

    let i: number = 0;

    productCategories.forEach((productCategory: any) => {
        productsHtml.push(
            <tr key={i++}>
                <th>{productCategory.categoryName}</th>
                <th>Pris</th>
            </tr>);
        productCategory.products.forEach((product: any) => {

            let productPriceProps: any = {
                "inputProduct": product,
                "isChecked": isChecked

            }
            productsHtml.push(
                <tr key={i++}>
                    <td>{product.name}</td>
                    <td><u className="prices" data-productName="${product.name}"> <ProductPrice productPriceProps={productPriceProps} /></u>&nbsp;kr</td>
                </tr>);

        });
    });

    return (productsHtml);
}