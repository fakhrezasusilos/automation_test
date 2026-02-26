export default class PracticeFormPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.genderRadio = (gender) => {
      const map = {
        Male: '#gender-radio-1',
        Female: '#gender-radio-2',
        Other: '#gender-radio-3'
      };

      return this.page.locator(map[gender]);
    };

    this.mobileNumberInput = page.locator('#userNumber');
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.subjectsInput = page.locator('#subjectsInput');
    this.hobbiesCheckboxes = (hobby) => page.getByRole('checkbox', { name: hobby });
    this.pictureUploadInput = page.locator('#uploadPicture');
    this.currentAddressInput = page.locator('#currentAddress');
    this.stateDropdown = page.locator('#state');
    this.cityDropdown = page.locator('#city');
    this.submitButton = page.locator('#submit');
    this.modalTitle = page.locator('#example-modal-sizes-title-lg');
  }
}
