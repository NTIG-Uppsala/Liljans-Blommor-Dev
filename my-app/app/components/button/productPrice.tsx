"use client"


export default function ProductPrice(productPriceProps: any) {

    let isChecked: boolean = productPriceProps.productPriceProps.isChecked;

    let price: number = productPriceProps.productPriceProps.inputProduct.price;
    let priceWithTax = Math.round(price / 1.25)

    if (isChecked) {

        return (

            <> {priceWithTax}  </>

        );


    } else {

        return (

            <> {price} </>

        )

    }



}