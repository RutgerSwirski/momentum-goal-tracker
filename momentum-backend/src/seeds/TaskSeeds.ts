import Task from "../models/Task";
import { faker } from "@faker-js/faker";

const seedTasks = async (goalIds: string[], tasksPerGoal = 5) => {
  let taskToGoalMap: Record<string, string> = {}; // Store task-goal relationships

  const tasks = goalIds.flatMap((goalId) =>
    Array.from({ length: tasksPerGoal }).map(() => {
      const task = new Task({
        goalId,
        name: faker.lorem.words(),
        description: faker.lorem.sentence(),
        status: faker.helpers.arrayElement(["pending", "in-progress"]),
        dueDate: faker.date.future(),
        deleted: faker.datatype.boolean(),
      });

      taskToGoalMap[task._id.toString()] = goalId; // Store mapping
      return task;
    })
  );

  await Task.insertMany(tasks);
  return taskToGoalMap; // Return the mapping
};

export default seedTasks;
