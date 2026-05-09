
import { test, chromium, webkit } from "@playwright/test"


test("Test to Launch a Browser", async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('//input[@id="username"]').fill('democsr2');
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.locator('//div[@id="label"]/a').click()
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[contains(@id,"createLeadForm_companyName")]').fill('TestleafDivya');
    await page.locator('(//input[contains(@id,"createLeadForm_firstName")])[1]').fill('Divya');
    await page.locator('(//input[contains(@id,"createLeadForm_lastName")])[1]').fill('Arun');
    await page.locator('//input[contains(@value,"Create Lead")]').click()
    await page.waitForTimeout(10000)
})