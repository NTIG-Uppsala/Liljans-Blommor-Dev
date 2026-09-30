import { test, expect } from '@playwright/test';

const PORT = 4321;


test('Validate phone link formatting standards | all pages', async ({ page }) => {

  const page_paths = [
    `localhost:${PORT}/pages/index.html`,
    `localhost:${PORT}/pages/products.html`,
    `localhost:${PORT}/pages/contact.html`,
    `localhost:${PORT}/pages/aboutus.html`,
  ];

  for (const url of page_paths) {
    await page.goto(url);

    const phoneLinks = page.locator('.tel a');

    await expect(
      phoneLinks.first(),
      `No phone link found on ${url}`
    ).toBeVisible();

    const phoneLinkCount = await phoneLinks.count();

    for (let i = 0; i < phoneLinkCount; i++) {
      await expect(
        phoneLinks.nth(i),
        `Invalid phone link on ${url}`
      ).toHaveAttribute('href', /^tel:/);
    }
  }
});


test(`Validate email link formatting standards | all pages`, async ({ page }) => {

  const page_paths = [
    `localhost:${PORT}/pages/index.html`,
    `localhost:${PORT}/pages/products.html`,
    `localhost:${PORT}/pages/contact.html`,
    `localhost:${PORT}/pages/aboutus.html`,
  ];

  for (const url of page_paths) {
    await page.goto(url);

    const emailLinks = page.locator('.mail a');

    await expect(
      emailLinks.first(),
      `No email link found on ${url}`
    ).toBeVisible();

    const emailLinkCount = await emailLinks.count();

    for (let i = 0; i < emailLinkCount; i++) {
      await expect(
        emailLinks.nth(i),
        `Invalid email link on ${url}`
      ).toHaveAttribute('href', /^mailto:/);
    }
  }
});