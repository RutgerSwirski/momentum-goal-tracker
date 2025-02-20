import mongoose from "mongoose";
import Task from "../models/Task";
import { faker } from "@faker-js/faker";

const seedTasks = async (goals: any[], tasksPerGoal = 5) => {
  const tasks = goals.flatMap((goal) =>
    Array.from({ length: tasksPerGoal }).map(() => ({
      goalId: goal._id,
      userId: goal.userId,
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      status: faker.helpers.arrayElement(["pending", "in-progress"]),
      dueDate: faker.date.future(),
      deleted: faker.datatype.boolean(),
    }))
  );

  await Task.insertMany(tasks);
};

export default seedTasks;
