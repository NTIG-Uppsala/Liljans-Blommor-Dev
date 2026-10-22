import { test, expect } from '@playwright/test';

const PORT = 3000;

test('Favicon in browser | all pages', async ({ page }) => {

    const page_paths = [
        `localhost:${PORT}`,
        `localhost:${PORT}/pages/products`,
        `localhost:${PORT}/pages/contact`,
        `localhost:${PORT}/pages/aboutus`,
    ];

    for (const url of page_paths) {
        await page.goto(url, { waitUntil: "load" });

        await expect(
            page.locator('link[rel="icon"]').first(),
            `favicon on ${url} is not correct`
        ).toHaveAttribute('href', /^\/favicon\.ico/);
    }
});