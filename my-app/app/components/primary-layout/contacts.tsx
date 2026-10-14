<<<<<<< Updated upstream
import { tel, mail, address, postalCode, city } from "../../../data/contacts.json";
import formattedTelephoneNumber from "@/app/lib/format";



=======
import { Contacts } from "@/app/lib/data";



function formatTelephoneNumber() {
    const onlyDigits = Contacts.tel.replace(/\D/g, "");
    const withoutCountry = onlyDigits.slice(2);
    const formattedTelNumber = withoutCountry.slice(0, 3) + " - " + withoutCountry.slice(3);
    return formattedTelNumber;
}
>>>>>>> Stashed changes

export function Tel() {

    return (

<<<<<<< Updated upstream
        <a href={`tel:${tel}`}>{formattedTelephoneNumber(tel)}</a>
=======
        <a href={`tel:${Contacts.tel}`}>{formatTelephoneNumber()}</a>
>>>>>>> Stashed changes

    );

}

export function Mail() {
    return (
        <a href={`mailto:${Contacts.mail}`}>{Contacts.mail}</a>
    );
}

export function Location() {
    return (
        <li>{Contacts.address}, {Contacts.postalCode} {Contacts.city}</li>
    );
}