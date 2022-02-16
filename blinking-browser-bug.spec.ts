import {test} from '@playwright/test'


test('blinking of the browser at startup', async ({page}) => {
    await page.goto('https://www.banki.ru/products/hypothec/')
})