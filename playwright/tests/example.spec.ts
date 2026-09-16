import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Liljans Blommor/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Startsida' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Liljans Blommor' })).toBeVisible();
});

test("all links work", async ({ page }) => {

  const links = ["Startsida", "Produkter", "Kontakt", "Om oss"];

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

})
