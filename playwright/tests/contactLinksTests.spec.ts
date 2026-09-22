import { test, expect } from '@playwright/test';

test('Validate phone link formatting standards | all pages', async ({ page }) => {

  const PORT = 3000;

  const page_paths = [
    `localhost:${PORT}/public/pages/index.html`,
    `localhost:${PORT}/public/pages/products.html`,
    `localhost:${PORT}/public/pages/contact.html`,
    `localhost:${PORT}/public/pages/aboutus.html`,
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

  const PORT = 3000;

  const page_paths = [
    `localhost:${PORT}/public/pages/index.html`,
    `localhost:${PORT}/public/pages/products.html`,
    `localhost:${PORT}/public/pages/contact.html`,
    `localhost:${PORT}/public/pages/aboutus.html`,
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

// test kolla om </a länk och om i a länk är rätt text 123456789

//const link = page.getByRole('link', {name: 'Email us'});
//await expect(link).toHaveAttribute('herf', /^mailto:/);
//await link.click()




// test(`Validate phone link formatting standards | all pages`, async ({ page }) => {

//   const PORT = 3000;

//   const page_paths = [
//     `localhost:${PORT}/index.html`,
//     "https://localhost:3000/pages/products.html",
//     "http://localhost:3000/pages/contact.html",
//     "http://localhost:3000/pages/aboutus.html",
//   ];

//   for (const url of page_paths) {
//     await page.goto(url);

//     const phoneLinks = page.locator('.tel a');
//     const phoneLinkCount = await phoneLinks.count();

//     for (let i = 0; i < phoneLinkCount; i++) {
//       const phone = phoneLinks.nth(i);

//       await expect(
//         phone,
//         `Invalid phone link on ${url}`
//       ).toHaveAttribute('href', /^tel:/);
//     }
//     const invalidTelLinks = page.locator('body *:not(a)').filter({
//       hasText: /tel:/i
//     });

//     const invalidTelCount = await invalidTelLinks.count();

//     expect(
//       invalidTelCount,
//       `Found tel: text that is not inside an a tag on ${url}`
//     ).toBe(0);
//   }
// });
