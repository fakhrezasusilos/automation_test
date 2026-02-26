import { test } from '@playwright/test';
import RegistrationFormFunctions from '../page-objects/functionality/registration-form.js';
import { generateUserData } from '../utils/userDataGenerator.js';
import invalidUsers from '../test-data/registration-data.json' assert { type: 'json' };

test.describe('Registration Form Tests', () => {

  // ================================
  // ✅ POSITIVE TEST
  // ================================
  test('@positive Valid User Registration', async ({ page }) => {
    const form = new RegistrationFormFunctions(page);
    const user = generateUserData();

    await test.step('Navigate to page', async () => {
      await page.goto('/automation-practice-form');
    });

    await test.step('Fill and submit form', async () => {
      await form.fillRegistrationForm(user);
      await form.submitForm();
    });

    await test.step('Verify successful submission', async () => {
      await form.expectSubmissionSuccess();
    });
  });


  // ======================================
  // ❌ NEGATIVE TESTS (DATA-DRIVEN LOOP)
  // ======================================
  for (const [scenario, userData] of Object.entries(invalidUsers)) {

    test(`@negative ${scenario} scenario`, async ({ page }) => {

      const form = new RegistrationFormFunctions(page);

      await test.step('Navigate to page', async () => {
        await page.goto('/automation-practice-form');
      });

      await test.step('Fill and submit form', async () => {
        await form.fillRegistrationForm(userData);
        await form.submitForm();
      });

      if (scenario === 'scriptInput') {

        await test.step('Verify submission succeeds (no sanitization)', async () => {
          await form.expectSubmissionSuccess();
        });

      } else {

        await test.step('Verify submission is blocked', async () => {
          await form.expectSubmissionBlocked();
        });

        await test.step('Verify red border validation appears', async () => {
          await form.validateRedBorderFields(userData);
        });

      }
    });
  }

});
