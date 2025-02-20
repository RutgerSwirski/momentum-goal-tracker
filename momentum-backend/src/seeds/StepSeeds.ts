import mongoose from "mongoose";
import Step from "../models/Step";
import { faker } from "@faker-js/faker";

const seedSteps = async (tasks: any[], stepsPerTask = 3) => {
  const steps = tasks.flatMap((task) =>
    Array.from({ length: stepsPerTask }).map(() => ({
      userId: task.userId,
      taskId: task._id,
      goalId: task.goalId,
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      status: faker.helpers.arrayElement([
        "pending",
        "in-progress",
        "completed",
      ]),
      dateCompleted: faker.date.past(),
      dueDate: faker.date.future(),
      deleted: faker.datatype.boolean(),
    }))
  );

  await Step.insertMany(steps);
};

export default seedSteps;
