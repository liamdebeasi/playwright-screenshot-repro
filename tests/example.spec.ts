import { test, expect } from '@playwright/test';

test('should take a full size screenshot of body-scrollable page', async ({ page }) => {
  await page.goto('http://localhost:3000/working.html');
  
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

test('should take a full size screenshot of non-scrollable page', async ({ page }) => {
  await page.goto('http://localhost:3000/not-working.html');
  
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
