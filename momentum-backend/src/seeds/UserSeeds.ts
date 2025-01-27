import bcrypt from "bcryptjs";
import User from "../models/User";
import { faker } from "@faker-js/faker";
import path from "path";
import fs from "fs/promises";

const seedUsers = async () => {
  let fixedUsers = [];
  try {
    const fixedUsersPath = path.resolve(__dirname, "fixedUsers.json");
    const fixedUsersData = await fs.readFile(fixedUsersPath, "utf-8");
    fixedUsers = JSON.parse(fixedUsersData);

    // Hash passwords for fixed users
    for (const user of fixedUsers) {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  } catch (error) {
    console.error("Error reading fixed users file", error);
  }

  const users = Array.from({ length: 10 }).map(() => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicture: faker.image.avatar(),
    };
  }) as {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    profilePicture: string;
    googleId?: string;
  }[];

  // Add fixed users
  users.push(...fixedUsers);

  await User.insertMany(users);
};

export default seedUsers;
