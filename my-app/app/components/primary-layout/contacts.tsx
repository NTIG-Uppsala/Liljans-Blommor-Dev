import { tel, mail, address, postalCode, city } from "../../../data/contacts.json";
import formattedTelephoneNumber from "@/app/lib/format";




export function Tel() {

    return (

        <a href={`tel:${tel}`}>{formattedTelephoneNumber(tel)}</a>

    );

}

export function Mail() {
    return (
        <a href={`mailto:${mail}`}>{mail}</a>
    );
}

export function Location() {
    return (
        <li>{address}, {postalCode} {city}</li>
    );
}