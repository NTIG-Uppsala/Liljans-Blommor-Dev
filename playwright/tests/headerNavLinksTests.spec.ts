import { test, expect } from '@playwright/test';

test("Nav links | all pages", async ({ page }) => {

  const links = [
    "Startsida",
    "Produkter",
    "Kontakt",
    "Om oss",
  ];

  const page_paths = [
    "http://localhost:3000/index.html",
    "http://localhost:3000/pages/products.html",
    "http://localhost:3000/pages/contact.html",
    "http://localhost:3000/pages/aboutus.html",
  ];

  for (let i in page_paths) {

    await page.goto(page_paths[i], { waitUntil: 'load' });

    for (let j in links) {

      await page.getByRole('link', { name: links[j], exact: true }).click();

    }
  }
});
