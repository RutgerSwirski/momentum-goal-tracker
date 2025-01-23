import Goal from "../models/Goal";
import { faker } from "@faker-js/faker";

const seedGoals = async () => {
  const goals = Array.from({ length: 10 }).map(() => {
    return {
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      dueDate: faker.date.future(),
      status: faker.random.arrayElement([
        "pending",
        "in-progress",
        "completed",
      ]),
      priority: faker.random.arrayElement(["low", "medium", "high"]),
      category: faker.random.arrayElement([
        "work",
        "personal",
        "fitness",
        "learning",
        "social",
      ]),
      dateCompleted: faker.date.past(),
      deleted: faker.random.boolean(),
    };
  });
  await Goal.insertMany(goals);
};

export default seedGoals;
