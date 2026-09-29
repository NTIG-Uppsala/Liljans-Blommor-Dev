const postalCodeInput = document.getElementById("postalCode")
const flowerTextBox = document.getElementById("flowerDeliveryAvailableBox")

let postalCodes = [];

function formattedPostalCode(postalCodeInput) {
    const onlyDigits = postalCodeInput.replace(/\D/g, "");
    const integer = parseInt(onlyDigits);
    return integer;
}

async function getPostalCodes() {

    const response = await fetch("../data/postalCodes.json");
    const postalCodesResponse = await response.json();

    const postalCodes = postalCodesResponse.postalCodes.map(postalCode => {
        return parseInt(postalCode);
    });

    return postalCodes
}

async function checkIfPostalCodeMatches() {

    if (postalCodes.length === 0) {
        postalCodes = await getPostalCodes();
    }

    const currentPostalCode = formattedPostalCode(postalCodeInput.value);
    const postalCodeMatches = postalCodes.includes(currentPostalCode);

    try {
        if (!currentPostalCode) {
            flowerTextBox.innerHTML = ``;
        } else if (postalCodeMatches) {
            flowerTextBox.innerHTML = `<p>Leverans är tillgängligt för: ${currentPostalCode}</p>`;
        } else if (!postalCodeMatches) {
            flowerTextBox.innerHTML = `<p>Leverans är inte tillgängligt för: ${currentPostalCode}</p>`;
        }
    } catch (e) {
        flowerTextBox.innerHTML = `<p>Något gick fel.</p>`;
    }
}

postalCodeInput.addEventListener("input", checkIfPostalCodeMatches)

checkIfPostalCodeMatches()

