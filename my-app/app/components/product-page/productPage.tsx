"use client"

import { Tel, Mail } from "@/app/components/primary-layout/contacts";
import checkIfPostalCodeMatches from "@/app/lib/flowerDelivery"
import PostalInput from "@/app/components/product-page/flowerDelivery";
import ProductsWithImg from "@/app/components/product-page/productsWithImg"
import ProductsWithoutImg from "@/app/components/product-page/productsWithoutImg"
import TaxButton from "@/app/components/button/taxButton"
import React, { useEffect, useState } from "react";

export default function HomePageMain() {


    const [isChecked, setCheck] = useState(false);

    return (

        <main>

            <h2>Våra Produkter</h2>
            <div className="sub-main">
                <div id="gallery" data-page="productsPage">

                    <ProductsWithImg isChecked={isChecked} />

                </div>

                <table id="productTable">
                    <ProductsWithoutImg isChecked={isChecked} />
                </table>

                <TaxButton setCheck={setCheck} />

            </div>

            <div id="flowerDeliveryTitleContainer">

                <h2 id="flowerDeliveryTitle">Blommogram</h2>

            </div>

            <section className="flowerDelivery">

                <h2>Blommogram?</h2>

                <p>Blommogram är ett blombud du kan beställa för att leverera en blombeställning till en adress på distans,
                    exempelvis när
                    någon
                    fyller år.</p>
                <p>Här nedan kan man skriva in postnumret till den adress du funderar på att skicka till för att se om
                    adressen är tillgänglig.</p>

                <h3>Postnummer</h3>


                <PostalInput />


                <p>För att beställa ett blommogram, kontakta oss via telefon eller e-post:</p>

                <ul>
                    <li>Tel: <span className="tel"><Tel /></span></li>
                    <li>E-post: <span className="mail"> <Mail /> </span></li>
                </ul>
            </section>

        </main>

    )

}