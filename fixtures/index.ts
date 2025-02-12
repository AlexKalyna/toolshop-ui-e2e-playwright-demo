import test from '@playwright/test';
import { Application } from '../app';
import { UserContext } from '../api/models';
import { faker } from '@faker-js/faker';

export const shopTest = test.extend<{
  app: Application;
  newUser: UserContext;
}>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },

  newUser: async ({ app }, use) => {
    const userModel = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      postcode: faker.location.zipCode(),
      phone: faker.phone.number(),
      password: faker.internet.password({ prefix: 'A1!a' }),
      email: `test+${faker.string.uuid()}@test.com`
    };

    const createdUser = await app.api.auth.register(userModel);
    await app.headlessLogin(userModel);
    await app.home.open();

    await use({ userModel, createdUser });
  }
});
