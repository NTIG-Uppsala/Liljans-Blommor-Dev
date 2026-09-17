import {test, expect} from '@playwright/test'

test("Click button | index page ", async ({page}) =>{

    await page.goto('http://localhost:3000/');

    for(let i = 0; i < 8; i++){

        await page.getByText("Inklusive moms").click();
        await page.getByText("Inklusive moms").click();

        await page.getByText("Inklusive moms").check();
        await page.getByText("Exklusive moms").uncheck();

    }
} )

test("Click button | product page ", async ({page}) =>{

    await page.goto('http://localhost:3000//pages/products.html');

    for(let i = 0; i < 8; i++){

        await page.getByText("Inklusive moms").click();
        await page.getByText("Inklusive moms").click();

        await page.getByText("Inklusive moms").check();
        await page.getByText("Exklusive moms").uncheck();

    }
} )

test("Tax button localstorage | index page", async ({page}) =>{

    await page.goto('http://localhost:3000/');

    await page.getByText("Inklusive moms").check();

    await expect(page.getByText("Inklusive moms")).toBeChecked();

    await page.reload();

    await expect(page.getByText("Inklusive moms"), "Button was not checked after reload").toBeChecked();

})

test("Tax button localstorage | product page", async ({page}) =>{

    await page.goto('http://localhost:3000//pages/products.html');

    await page.getByText("Inklusive moms").check();

    await expect(page.getByText("Inklusive moms")).toBeChecked();

    await page.reload();

    await expect(page.getByText("Inklusive moms"), "Button was not checked after reload").toBeChecked();

})

test("Tax button tax | index page", async ({page}) =>{

    await page.goto('http://localhost:3000/', { waitUntil: "load" } );

    const prices = await page.locator(".prices").all();

    const firstPrice = await prices[0].innerText();
    const firstPriceWithoutMoms = (Math.round(parseInt(firstPrice)/1.25)).toString();

    const lastPrice = await prices[prices.length -1].innerText();
    const lastPriceWithoutMoms = (Math.round(parseInt(lastPrice)/1.25)).toString();

    await page.getByText("Inklusive moms").click();

    await expect(prices[0]).toContainText(firstPriceWithoutMoms);

    await expect(prices[prices.length -1]).toContainText(lastPriceWithoutMoms);

})

test("Tax button tax | product page", async ({page}) =>{

    await page.goto('http://localhost:3000//pages/products.html', { waitUntil: "load" } );

    const prices = await page.locator(".prices").all();

    const firstPrice = await prices[0].innerText();
    const firstPriceWithoutMoms = (Math.round(parseInt(firstPrice)/1.25)).toString();

    const lastPrice = await prices[prices.length -1].innerText();
    const lastPriceWithoutMoms = (Math.round(parseInt(lastPrice)/1.25)).toString();

    await page.getByText("Inklusive moms").click();

    await expect(prices[0]).toContainText(firstPriceWithoutMoms);

    await expect(prices[prices.length -1]).toContainText(lastPriceWithoutMoms);

})