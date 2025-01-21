import { test, expect } from '@playwright/test';

test('should increment count on button click', async ({ page }) => {
  await page.goto('http://localhost:8080');

  const button = await page.getByRole('button');
  await expect(button).toBeDefined();
  
  await button.click();
  await expect(await button.textContent()).toBe('count is 1');
});
