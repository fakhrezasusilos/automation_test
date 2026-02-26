import { expect } from '@playwright/test';

export async function expectFieldInvalid(locator) {
  await expect(locator).toHaveClass(/is-invalid/);
}

export async function expectFieldValid(locator) {
  await expect(locator).not.toHaveClass(/is-invalid/);
}

export async function expectRedBorder(locator) {
  await expect(locator)
    .toHaveCSS('border-color', 'rgb(220, 53, 69)');
}
