import { Contacts } from "@/app/lib/data";
import formattedTelephoneNumber from "@/app/lib/format";



export function Tel() {

    return (

        <a href={`tel:${Contacts.tel}`}>{formattedTelephoneNumber(Contacts.tel)}</a>

    );

}

export function Mail() {
    return (
        <a href={`mailto:${Contacts.mail}`}>{Contacts.mail}</a>
    );
}

export function Location() {
    return (
        <>{Contacts.address}, {Contacts.postalCode} {Contacts.city}</>
    );
}