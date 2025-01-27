import Task from "../models/Task";
import { faker } from "@faker-js/faker";

const seedTasks = async (goalIds: string[], tasksPerGoal = 10) => {
  const tasks = goalIds.flatMap((goalId) =>
    Array.from({ length: tasksPerGoal }).map(() => {
      return {
        goalId,
        name: faker.lorem.words(),
        description: faker.lorem.sentence(),
        dueDate: faker.date.future(),
        status: faker.helpers.arrayElement([
          "pending",
          "in-progress",
          "completed",
        ]),
        notes: Array.from({ length: 5 }).map(() => faker.lorem.sentence()),
        order: faker.number.int({ min: 1, max: 10 }),
        dateCompleted: faker.date.past(),
        deleted: faker.datatype.boolean(),
      };
    })
  );

  await Task.insertMany(tasks);
};

export default seedTasks;
