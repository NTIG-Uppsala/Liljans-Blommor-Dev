import { test, expect } from '@playwright/test';

const PORT = 3000;

test('Title in browser | all pages', async ({ page }) => {

    const page_paths = [
        `localhost:${PORT}`,
        `localhost:${PORT}/pages/products`,
        `localhost:${PORT}/pages/contact`,
        `localhost:${PORT}/pages/aboutus`,
    ];

    for (const url of page_paths) {
        await page.goto(url);

        await expect(
            page,
            `title on ${url} is not correct`
        ).toHaveTitle('Liljans Blommor');
    }
});