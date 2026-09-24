import { test, expect } from '@playwright/test';

const PORT = 4321;

test("Nav links | all pages", async ({ page }) => {

  const links = [
    "Startsida",
    "Produkter",
    "Kontakt",
    "Om oss",
  ];

  const page_paths = [
    `localhost:${PORT}/pages/index.html`,
    `localhost:${PORT}/pages/products.html`,
    `localhost:${PORT}/pages/contact.html`,
    `localhost:${PORT}/pages/aboutus.html`,
  ];

  for (let i in page_paths) {

    await page.goto(page_paths[i], { waitUntil: 'load' });

    for (let j in links) {

      await page.getByRole('link', { name: links[j], exact: true }).click();

    }
  }
});
