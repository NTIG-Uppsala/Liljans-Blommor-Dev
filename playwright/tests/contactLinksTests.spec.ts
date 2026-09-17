import { test, expect } from '@playwright/test';

test(`Vaildate phone and email link formatting standards | all pages`, async ({ page }) => {

  const page_paths = [
    "http://localhost:3000/index.html",
    "http://localhost:3000/pages/products.html",
    "http://localhost:3000/pages/contact.html",
    "http://localhost:3000/pages/aboutus.html",
  ];

  for (let i in page_paths) {

    await page.goto(page_paths[i]);

    const phoneNummbers = await page.locator(".tel").all();

    for (let i in phoneNummbers) {
      await phoneNummbers[i].click();
    }
  }
});

test(`Validate email link formatting standards | all pages`, async ({ page }) => {

  const page_paths = [
    "http://localhost:3000/index.html",
    "http://localhost:3000/pages/products.html",
    "http://localhost:3000/pages/contact.html",
    "http://localhost:3000/pages/aboutus.html",
  ];

  for (let i in page_paths) {

    await page.goto(page_paths[i]);

    const emails = await page.locator(".mail").all();

    for (let j in emails) {
      await emails[j].click();
    }
  }
})