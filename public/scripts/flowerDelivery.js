const zipCodeInput = 98130;

async function getZipCodes() {

    const response = await fetch("../data/zipCodes.json");
    const zipCodesResponse = await response.json();

    zipCodes = zipCodesResponse.zipCodes;

    return zipCodes;

}

async function checkIfZipCodeMatches() {

    let zipCodes = await getZipCodes();

    for (let zipCode of zipCodes) {

        if (zipCodeInput == zipCode) {

            console.log("matches")

        }

    }

}

checkIfZipCodeMatches()