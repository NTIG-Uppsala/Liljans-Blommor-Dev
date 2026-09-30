// Special case "test" - taking screenshots of every page - no expects

import { test } from '@playwright/test';

const PORT = 4321;
const page_paths = [
    `localhost:${PORT}/pages/index.html`,
    `localhost:${PORT}/pages/products.html`,
    `localhost:${PORT}/pages/contact.html`,
    `localhost:${PORT}/pages/aboutus.html`,
];

test('Screenshot | all pages', async ({ page }) => {
    for (const url of page_paths) {
        await page.goto(url, { waitUntil: "networkidle" });


        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

        const dirPath = "playwright/screenshots"
        const filePath = `${dirPath}/${timestamp}.jpg`

        // Needed since the screenshot breaks otherwise
        await page.evaluate(() => {
            document.documentElement.style.height = 'auto';
            document.body.style.height = 'auto';
            document.body.style.overflow = 'visible';
        });

        await page.screenshot({ path: filePath, fullPage: true });

        console.log(`Screenshot saved: ${filePath}`);
    }
});