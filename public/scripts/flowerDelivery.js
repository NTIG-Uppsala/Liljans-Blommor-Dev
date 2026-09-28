const postalCodeInput = document.getElementById("postalCode")
const flowerTextBox = document.getElementById("flowerDeliveryAvailableBox")

function formattedPostalCode(postalCodeInput) {
    const onlyDigits = postalCodeInput.replace(/\D/g, "");
    const integer = parseInt(onlyDigits);
    return integer;
}

async function getPostalCodes() {

    const response = await fetch("../data/postalCodes.json");
    const postalCodesResponse = await response.json();

    const postalCodes = postalCodesResponse.postalCodes;

    return postalCodes
}

async function checkIfPostalCodeMatches() {

    let postalCodeMatches = false;

    const postalCodes = await getPostalCodes();

    for (let postalCode of postalCodes) {

        if (formattedPostalCode(postalCodeInput.value) === parseInt(postalCode)) {

            postalCodeMatches = true;

            break;

        }
    }

    if (postalCodeInput.value == "") {

        flowerTextBox.innerHTML = ``;

    } else if (postalCodeMatches) {

        flowerTextBox.innerHTML = `
        <p> Leverans är tillgängligt för: ${formattedPostalCode(postalCodeInput.value)} </p>`;


    } else if (!postalCodeMatches) {

        flowerTextBox.innerHTML = `<p> Leverans är inte tillgängligt för: ${formattedPostalCode(postalCodeInput.value)} </p>`;

    }
}

postalCodeInput.addEventListener("input", checkIfPostalCodeMatches)

checkIfPostalCodeMatches()

