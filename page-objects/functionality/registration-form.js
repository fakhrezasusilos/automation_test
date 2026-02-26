import { expect } from "playwright/test";
import RegistrationForm from "../locators/registration-form.js";
import { logStep } from "../../utils/logger.js";
import { expectRedBorder } from "../../utils/asserts.js";

export default class RegistrationFormHelper {
  constructor(page) {
    this.page = page;
    this.registrationForm = new RegistrationForm(page);
  }

  async fillRegistrationForm(usersData) {
    await logStep('Filling the registration form with user data');
    await logStep(`User Data: ${JSON.stringify(usersData)}`);

    await logStep('Filling First Name');
    await this.registrationForm.firstNameInput.fill(usersData.firstName);

    await logStep('Filling Last Name');
    await this.registrationForm.lastNameInput.fill(usersData.lastName);

    await logStep('Filling Email');
    await this.registrationForm.emailInput.fill(usersData.email);

    await logStep('Selecting Gender');
    await this.registrationForm.genderRadio(usersData.gender).check();


    await logStep('Filling Mobile Number');
    await this.registrationForm.mobileNumberInput.fill(usersData.mobile);
  }

  async submitForm() {
    await logStep('Submitting the registration form');
    await this.registrationForm.submitButton.click();
  }

  async expectSubmissionSuccess() {
    await logStep('Verifying that the form submission was successful');
    const modalTitle = this.registrationForm.modalTitle;
    await expect(modalTitle).toBeVisible();
    await expect(modalTitle).toHaveText('Thanks for submitting the form');
    await expect(modalTitle).toHaveCSS('opacity', '1');
  }

  async validateRedBorderFields(userData) {
    if (!userData.firstName) {
      await expectRedBorder(this.registrationForm.firstNameInput);
    }

    if (!userData.mobile || userData.mobile.length !== 10) {
      await expectRedBorder(this.registrationForm.mobileNumberInput);
    }

    if (!userData.email || !userData.email.includes('@')) {
      await expectRedBorder(this.registrationForm.emailInput);
    }
  }

  async expectSubmissionBlocked() {
  await expect(this.registrationForm.modalTitle).not.toBeVisible();
}


}