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

  for (const url of page_paths) {

    await page.goto(url, { waitUntil: 'load' });

    for (const link of links) {

      await page.getByRole('link', { name: link, exact: true }).click();

    }
  }
});
