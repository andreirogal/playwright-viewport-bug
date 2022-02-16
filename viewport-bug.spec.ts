import {expect, test} from '@playwright/test';

test('Viewport bug', async ({page}) => {
    await page.goto('https://www.banki.ru/products/hypothec/catalogue/ipoteka_mnogodetnyim_semyam/');
    await page.pause()

    await page.locator('[data-role]:has-text("Показать еще")').scrollIntoViewIfNeeded()
    await page.locator('[data-test=results-item]').nth(14).waitFor()
    const tariffsInfoOnFirstCataloguePage = await page.locator('[data-test=results-item]').allTextContents()

    expect(tariffsInfoOnFirstCataloguePage.length).toBeGreaterThan(0)
    await page.locator('[data-test=section-menu]').scrollIntoViewIfNeeded()
    await page.click('[data-test=section-menu-item]:has-text("Рефинансирование ипотеки")')
});