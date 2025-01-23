import User from "../models/User";
import { faker } from "@faker-js/faker";

const seedUsers = async () => {
  const users = Array.from({ length: 10 }).map(() => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicture: faker.image.avatar(),
    };
  });
  await User.insertMany(users);
};

export default seedUsers;
