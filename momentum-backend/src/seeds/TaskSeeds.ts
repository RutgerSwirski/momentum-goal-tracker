import Task from "../models/Task";
import { faker } from "@faker-js/faker";

const seedTasks = async () => {
  const tasks = Array.from({ length: 10 }).map(() => {
    return {
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      dueDate: faker.date.future(),
      status: faker.random.arrayElement([
        "pending",
        "in-progress",
        "completed",
      ]),
      notes: Array.from({ length: 5 }).map(() => faker.lorem.sentence()),
      order: faker.random.number(),
      dateCompleted: faker.date.past(),
      deleted: faker.random.boolean(),
    };
  });

  await Task.insertMany(tasks);
};

export default seedTasks;
