import mongoose from "mongoose";
import seedUsers from "./UserSeeds";
import seedGoals from "./GoalSeeds";
import seedTasks from "./TaskSeeds";
import seedSteps from "./StepSeeds";
import User from "../models/User";
import Goal from "../models/Goal";
import Task from "../models/Task";
import Step from "../models/Step";

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/momentum_db"
    );

    // clear all data in the database
    await User.deleteMany({});
    await Goal.deleteMany({});
    await Task.deleteMany({});
    await Step.deleteMany({});
    console.log("Cleared database");

    // Seed Users
    await seedUsers();
    const users = await User.find({}, "_id");
    const userIds = users.map((user) => user._id.toString());

    // Seed Goals
    await seedGoals(userIds);
    const goals = await Goal.find({}, "_id");
    const goalIds = goals.map((goal) => goal._id.toString());

    // Seed Tasks and get mapping of taskId -> goalId
    const taskToGoalMap = await seedTasks(goalIds);
    // const taskIds = Object.keys(taskToGoalMap); // Extract task IDs

    // Seed Steps with the task-to-goal mapping
    await seedSteps(taskToGoalMap);

    console.log("Seeded database");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
