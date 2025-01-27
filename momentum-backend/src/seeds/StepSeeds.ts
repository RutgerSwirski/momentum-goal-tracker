import Step from "../models/Step";
import { faker } from "@faker-js/faker";

const seedSteps = async (taskIds: string[]) => {
  const steps = taskIds.flatMap((taskId) => {
    return {
      taskId,
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
    };
  });
  await Step.insertMany(steps);
};

export default seedSteps;
