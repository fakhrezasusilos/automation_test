import { expect } from '@playwright/test';

export async function expectRedBorder(locator) {
  await expect(locator)
    .toHaveCSS('border-color', 'rgb(220, 53, 69)');
}
