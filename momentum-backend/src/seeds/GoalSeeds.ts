import Goal from "../models/Goal";
import { faker } from "@faker-js/faker";

const seedGoals = async (userIds: string[]) => {
  const goals = userIds.flatMap((userId) => {
    return {
      userId,
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      dueDate: faker.date.future(),
      status: faker.helpers.arrayElement([
        "pending",
        "in-progress",
        "completed",
      ]),
      priority: faker.helpers.arrayElement(["low", "medium", "high"]),
      category: faker.helpers.arrayElement([
        "work",
        "personal",
        "fitness",
        "learning",
        "social",
      ]),
      dateCompleted: faker.date.past(),
      deleted: faker.datatype.boolean(),
    };
  });
  await Goal.insertMany(goals);
};

export default seedGoals;
