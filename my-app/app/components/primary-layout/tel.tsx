import { tel } from "../../../data/contacts.json";


function formatTelephoneNumber() {
    const onlyDigits = tel.replace(/\D/g, "");
    const withoutCountry = onlyDigits.slice(2);
    const formattedTelNumber = withoutCountry.slice(0, 3) + " - " + withoutCountry.slice(3);
    return formattedTelNumber;
}

export default function Tel() {

    return (

        <a href="tel:${tel}">{formatTelephoneNumber()}</a>

    )

}