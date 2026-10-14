
export default function formattedTelephoneNumber(tel: string) {
    const onlyDigits = tel.replace(/\D/g, "");
    const withoutCountry = onlyDigits.slice(2);
    const formattedTelNumber = withoutCountry.slice(0, 3) + " - " + withoutCountry.slice(3);
    return formattedTelNumber;
}