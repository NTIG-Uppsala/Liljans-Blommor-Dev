import { test, expect } from '@playwright/test';

const PORT = 3000;
const pages = [
    `localhost:${PORT}/index.html`,
    `localhost:${PORT}/pages/aboutus.html`,
    `localhost:${PORT}/pages/contact.html`,
    `localhost:${PORT}/pages/products.html`,
];

test("Check broken images | all pages", async ({ page }) => {
    for (let i in pages) {
        await page.goto(pages[i], { waitUntil: "networkidle" });

        const brokenImages = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("img"))
                .filter(img => img.naturalHeight === 0 || img.naturalWidth === 0)
                .map(img => img.src);
        });

        expect(
            brokenImages.length,
            `Broken images: ${brokenImages.toString()}`
        ).toBe(0);
    }
});

test("Check broken images | homepage", async ({ page }) => {

    await page.goto(`localhost:${PORT}/index.html`, { waitUntil: "networkidle" });

    const brokenImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("img"))
            .filter(img => img.naturalHeight === 0 || img.naturalWidth === 0)
            .map(img => img.src);
    });

    expect(
        brokenImages.length,
        `Broken images: ${brokenImages.toString()}`
    ).toBe(0);

});

test("Check broken images | products page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/pages/products.html`, { waitUntil: "networkidle" });

    const brokenImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("img"))
            .filter(img => img.naturalHeight === 0 || img.naturalWidth === 0)
            .map(img => img.src);
    });

    expect(
        brokenImages.length,
        `Broken images: ${brokenImages.toString()}`
    ).toBe(0);

});

test("Check broken images | about us page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/pages/aboutus.html`, { waitUntil: "networkidle" });

    const brokenImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("img"))
            .filter(img => img.naturalHeight === 0 || img.naturalWidth === 0)
            .map(img => img.src);
    });

    expect(
        brokenImages.length,
        `Broken images: ${brokenImages.toString()}`
    ).toBe(0);

});

test("Check broken images | contact page", async ({ page }) => {

    await page.goto(`localhost:${PORT}/pages/contact.html`, { waitUntil: "networkidle" });

    const brokenImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("img"))
            .filter(img => img.naturalHeight === 0 || img.naturalWidth === 0)
            .map(img => img.src);
    });

    expect(
        brokenImages.length,
        `Broken images: ${brokenImages.toString()}`
    ).toBe(0);

});