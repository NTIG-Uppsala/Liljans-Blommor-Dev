import { test, expect } from '@playwright/test';

const PORT = 3000;

const page_paths = [
    `localhost:${PORT}`,
    `localhost:${PORT}/pages/products`,
];

test("Click button | Home and Product page", async ({ page }) => {

    for (const url of page_paths) {
        await page.goto(url, { waitUntil: "load" });

        await page.getByText("Inklusive moms").check();
        await expect(page.getByText("Inklusive moms")).toBeChecked()

        await page.getByText("Exklusive moms").uncheck();
        await expect(page.getByText("Inklusive moms")).not.toBeChecked()

    }
});


test("Tax button tax | Home and Product page", async ({ page }) => {

    for (const url of page_paths) {

        await page.goto(url, { waitUntil: "load" });

        const prices = await page.locator(".prices").all();

        const firstPrice = await prices[0].innerText();
        const firstPriceWithoutMoms = (Math.round(parseInt(firstPrice) / 1.25)).toString();

        const lastPrice = await prices[prices.length - 1].innerText();
        const lastPriceWithoutMoms = (Math.round(parseInt(lastPrice) / 1.25)).toString();

        await page.getByText("Inklusive moms").check();

        await expect(prices[0], "First product price did not match after tax").toContainText(firstPriceWithoutMoms);

        await expect(prices[prices.length - 1], "Last product price did not match after tax").toContainText(lastPriceWithoutMoms);

        await page.getByText("Inklusive moms").uncheck();

        await expect(prices[0], "First product price did not match after two clicks").toContainText(firstPrice);

        await expect(prices[prices.length - 1], "Last product price did not match after two clicks").toContainText(lastPrice);
    }

});