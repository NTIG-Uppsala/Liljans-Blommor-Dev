"use client"

import { postalCodes } from "@/data/postalCodes.json";
import React, { useEffect, useState } from "react";
import checkIfPostalCodeMatches from "@/app/lib/flowerDelivery";


// const postalCodeInput = (<HTMLInputElement>document.getElementById("postalCode"));

let postalInput: HTMLInputElement;

export default function PostalInput() {

    let postalCodesList: number[] = postalCodes;
    const [PostalCode, setPostalCode] = React.useState("");


    useEffect(() => {
        postalInput = (document.getElementById("postalCode") as HTMLInputElement);

        setPostalCode(postalInput.value);

    })

    function updatePostalCode() {

        postalInput.value = postalInput.value.replace(/[^0-9\s\-]/g, '');
        setPostalCode(postalInput.value);
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
                    autoComplete="postal-code" maxLength={6}
                    required defaultValue={""} onChange={updatePostalCode}></input>

            </label>

            <div id="flowerDeliveryAvailableBox"> {checkIfPostalCodeMatches(PostalCode, postalCodesList)} </div>

        </div>
    );

}

