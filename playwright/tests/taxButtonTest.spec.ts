import {test, expect} from '@playwright/test'

test("click button", async ({page}) =>{

    await page.goto('http://localhost:3000/');

    await page.getByText("Inklusive moms").click()
    await page.getByText("Inklusive moms").click()

    await page.getByText("Inklusive moms").check()
    await page.getByText("Exklusive moms").uncheck()

} )

test("button local storage", async ({page}) =>{

    await page.goto('http://localhost:3000/');

    await page.getByText("Inklusive moms").check()

    await expect(page.getByText("Inklusive moms")).toBeChecked()

    await page.reload()

    await expect(page.getByText("Inklusive moms"), "Button was not checked after reload").toBeChecked()

})