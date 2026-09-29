import { test, expect } from '@playwright/test';
const PORT = 4321;
const protocol = "http://"

const postalCodes = {
    "correct": [
        "98130",
        "981 36",
        "981-45",
    ],
    "incorrect": [
        "12345",
        "83495",
    ],
    "edgeCases": [
        "<p>Hello</p>",
        "~\$c}£$\@$--wd\n",
    ]
}


test('Placeholder | product page', async ({ page }) => {
    const url = `${protocol}localhost:${PORT}/pages/products.html`
    await page.goto(url, { waitUntil: "networkidle" });
    const postalInput = page.locator("input#postalCode");
    await postalInput.scrollIntoViewIfNeeded();

    const placeholderMessage = "ex: 95959";

    expect(postalInput).toHaveAttribute("placeholder", placeholderMessage);
});


test('Correct postal codes | product page', async ({ page }) => {
    const url = `${protocol}localhost:${PORT}/pages/products.html`
    await page.goto(url, { waitUntil: "networkidle" });
    const postalInput = page.locator("input#postalCode");
    const flowerDeliveryAvailableBox = page.locator("div#flowerDeliveryAvailableBox");
    await postalInput.scrollIntoViewIfNeeded();

    for (const postalCode of postalCodes.correct) {
        await postalInput.fill("");
        await postalInput.pressSequentially(postalCode);

        const expectToContainText = `Leverans är tillgängligt för: ${postalCode.replace(/\D/g, "")}`;

        expect(
            await flowerDeliveryAvailableBox.textContent(),
            `Postalcode: ${postalCode} didn't work`
        ).toContain(expectToContainText);
    }
});


test('Incorrect postal codes | product page', async ({ page }) => {
    const url = `${protocol}localhost:${PORT}/pages/products.html`
    await page.goto(url, { waitUntil: "networkidle" });
    const postalInput = page.locator("input#postalCode");
    const flowerDeliveryAvailableBox = page.locator("div#flowerDeliveryAvailableBox");
    await postalInput.scrollIntoViewIfNeeded();

    for (const postalCode of postalCodes.incorrect) {
        await postalInput.fill("");
        await postalInput.pressSequentially(postalCode);

        const expectToContainText = `Leverans är inte tillgängligt för: ${postalCode.replace(/\D/g, "")}`;

        expect(
            await flowerDeliveryAvailableBox.textContent(),
            `Postalcode: ${postalCode} didn't work`
        ).toContain(expectToContainText);
    }
});


test('Edge cases | product page', async ({ page }) => {
    const url = `${protocol}localhost:${PORT}/pages/products.html`
    await page.goto(url, { waitUntil: "networkidle" });
    const postalInput = page.locator("input#postalCode");
    const flowerDeliveryAvailableBox = page.locator("div#flowerDeliveryAvailableBox");
    await postalInput.scrollIntoViewIfNeeded();

    for (const postalCode of postalCodes.edgeCases) {
        await postalInput.fill("");
        await postalInput.fill(postalCode); //.fill instead of .pressSequantially to really test the edge cases

        const expectToContainText = ``;

        expect(
            await flowerDeliveryAvailableBox.textContent(),
            `Postalcode: ${postalCode} didn't work`
        ).toContain(expectToContainText);
    }
});