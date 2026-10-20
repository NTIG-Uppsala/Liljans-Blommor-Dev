function formattedPostalCode(postalCodeInput: string) {
    const onlyDigits = postalCodeInput.replace(/\D/g, "");
    const integer = parseInt(onlyDigits);
    return integer;
}

export default function checkIfPostalCodeMatches(PostalCode: string, postalCodesList: number[]) {

    let currentPostalCode: number;

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
        console.error(e);
        return <p>Något gick fel.</p>;
    }
}