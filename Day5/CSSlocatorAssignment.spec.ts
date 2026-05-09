
import {test,chromium, webkit} from "@playwright/test"


// test("Test to Launch a Browser using normal CSS approach", async ({page})=> {
//     await page.goto('https://login.salesforce.com/?locale=in')
//     //1st approach
//     await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
//     await page.locator('[id="password"]').fill('TestLeaf@2025')
//     await page.locator('[id="Login"]').click()

//     await page.waitForTimeout(10000)

// })

test("Test to Launch a Browser using 2nd CSS approach", async ({page})=> {
    await page.goto('https://login.salesforce.com/?locale=in')
    //1st approach
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    await page.waitForTimeout(10000)

})