const postalCodeInput = document.getElementById("postalCode")
const flowerTextBox = document.getElementById("flowerDeliveryAvailableBox")

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

        if (postalCodeInput.value == postalCode) {

            postalCodeMatches = true;

            break;

        }
    }

    console.log(postalCodeInput.value)

    if (postalCodeInput.value == "") {

        flowerTextBox.innerHTML = ``;

    } else if (postalCodeMatches) {

        flowerTextBox.innerHTML = `<p> Leverans är tillgängligt för: ${postalCodeInput.value} </p>`;

    } else if (!postalCodeMatches) {

        flowerTextBox.innerHTML = `<p> Leverans är inte tillgängligt för: ${postalCodeInput.value} </p>`;

    }
}

postalCodeInput.addEventListener("input", checkIfPostalCodeMatches)

checkIfPostalCodeMatches()

