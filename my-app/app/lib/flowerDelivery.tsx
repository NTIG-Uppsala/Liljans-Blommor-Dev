"use client"

import { postalCodes } from "@/data/postalCodes.json";
import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";

// const postalCodeInput = (<HTMLInputElement>document.getElementById("postalCode"));

let postalInput: HTMLInputElement;

export default function Postal() {

    let postalCodesList: number[] = postalCodes;
    const [PostalCode, setPostalCode] = React.useState("");


    useEffect(() => {
        postalInput = (document.getElementById("postalCode") as HTMLInputElement)

        setPostalCode(postalInput.value)

    })



    function updatePostalCode() {

        setPostalCode(postalInput.value)
    }


    function formattedPostalCode(postalCodeInput: string) {
        const onlyDigits = postalCodeInput.replace(/\D/g, "");
        const integer = parseInt(onlyDigits);
        return integer;
    }

    function checkIfPostalCodeMatches() {

        let currentPostalCode: number = -1;

        currentPostalCode = formattedPostalCode(PostalCode);


        const postalCodeMatches = postalCodesList.includes(currentPostalCode);

        try {
            if (!currentPostalCode) {
                return
            } else if (postalCodeMatches) {
                return <p>Leverans är tillgängligt för: {currentPostalCode}</p>;
            } else if (!postalCodeMatches) {
                return <p>Leverans är inte tillgängligt för: {currentPostalCode}</p>;
            }
        } catch (e) {
            return <p>Något gick fel.</p>;
        }
    }


    return (

        <div>

            <label className="addressInput" htmlFor="postalCode">
                <span className="locationIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"></path>
                        <circle cx="12" cy="9" r="2.5"></circle>
                    </svg>
                </span>

                <input type="text" id="postalCode" name="postalCode" placeholder="ex: 95959" inputMode="numeric"
                    autoComplete="postal-code" maxLength={6} pattern="/[^0-9\s\-]/g, ''{5}"
                    required defaultValue={""} onChange={updatePostalCode}></input>

            </label>

            <div id="flowerDeliveryAvailableBox"> {checkIfPostalCodeMatches()} </div>

        </div>
    );

}

