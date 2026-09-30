import { test, expect } from '@playwright/test';

const PORT = 4321;


test("Click button | index page ", async ({ page }) => {

    await page.goto(`localhost:${PORT}/`);

    await page.getByText("Inklusive moms").click();
    await page.getByText("Inklusive moms").click();

    await page.getByText("Inklusive moms").check();
    await page.getByText("Exklusive moms").uncheck();

    //Missing expect?
});


test("Click button | product page ", async ({ page }) => {

    await page.goto(`localhost:${PORT}/pages/products.html`);

    await page.getByText("Inklusive moms").click();
    await page.getByText("Inklusive moms").click();

    await page.getByText("Inklusive moms").check();
    await page.getByText("Exklusive moms").uncheck();

    //Missing expect?
});


test("Tax button localstorage | index page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/`);

    await page.getByText("Inklusive moms").check();

    await expect(page.getByText("Inklusive moms"), "Tax button did not check").toBeChecked();

    await page.reload();

    await expect(page.getByText("Inklusive moms"), "Button was not checked after reload").toBeChecked();
});


test("Tax button localstorage | product page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/pages/products.html`);

    await page.getByText("Inklusive moms").check();

    await expect(page.getByText("Inklusive moms"), "Tax button did not check").toBeChecked();

    await page.reload();

    await expect(page.getByText("Inklusive moms"), "Button was not checked after reload").toBeChecked();
});


test("Tax button tax | index page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/`, { waitUntil: "load" });

    const prices = await page.locator(".prices").all();

    const firstPrice = await prices[0].innerText();
    const firstPriceWithoutMoms = (Math.round(parseInt(firstPrice) / 1.25)).toString();

    const lastPrice = await prices[prices.length - 1].innerText();
    const lastPriceWithoutMoms = (Math.round(parseInt(lastPrice) / 1.25)).toString();

    await page.getByText("Inklusive moms").click();

    await expect(prices[0], "First product price did not match after tax").toContainText(firstPriceWithoutMoms);

    await expect(prices[prices.length - 1], "Last product price did not match after tax").toContainText(lastPriceWithoutMoms);

    await page.getByText("Inklusive moms").click();

    await expect(prices[0], "First product price did not match after two clicks").toContainText(firstPrice);

    await expect(prices[prices.length - 1], "Last product price did not match after two clicks").toContainText(lastPrice);

});

test("Tax button tax | product page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/pages/products.html`, { waitUntil: "load" });

    const prices = await page.locator(".prices").all();

    const firstPrice = await prices[0].innerText();
    const firstPriceWithoutMoms = (Math.round(parseInt(firstPrice) / 1.25)).toString();

    const lastPrice = await prices[prices.length - 1].innerText();
    const lastPriceWithoutMoms = (Math.round(parseInt(lastPrice) / 1.25)).toString();

    await page.getByText("Inklusive moms").click();

    await expect(prices[0], "First product price did not match after tax").toContainText(firstPriceWithoutMoms);

    await expect(prices[prices.length - 1], "Last product price did not match after tax").toContainText(lastPriceWithoutMoms);

    await page.getByText("Inklusive moms").click();

    await expect(prices[0], "First product price did not match after two clicks").toContainText(firstPrice);

    await expect(prices[prices.length - 1], "Last product price did not match after two clicks").toContainText(lastPrice);

});