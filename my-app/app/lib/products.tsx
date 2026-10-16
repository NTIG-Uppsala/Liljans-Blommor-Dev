import { ReactElement } from "react";
import Image from "next/image"


export function generateHtmlForImgProducts(imgProducts: Object[]) {

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

export function generateHtmlProducts(productCategories: Object[]) {

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