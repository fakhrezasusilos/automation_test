import { faker } from '@faker-js/faker';

export function generateUserData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    mobile: '08' + faker.string.numeric({ length: 8 })
  };
}
