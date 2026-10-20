import { test, expect } from '@playwright/test';

const PORT = 3000;

const page_paths = [
  `localhost:${PORT}`,
  `localhost:${PORT}/pages/products`,
  `localhost:${PORT}/pages/contact`,
  `localhost:${PORT}/pages/aboutus`,
];


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

  for (const url of page_paths) {

    await page.goto(url, { waitUntil: 'load' });

    for (const link of links) {

      await page.getByRole('link', { name: link, exact: true }).click();

    }
  }
});
