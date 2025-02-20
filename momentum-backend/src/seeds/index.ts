import mongoose from "mongoose";
import seedUsers from "./UserSeeds";
import seedGoals from "./GoalSeeds";
import seedTasks from "./TaskSeeds";
import seedSteps from "./StepSeeds";
import User from "../models/User";
import Goal from "../models/Goal";
import Task from "../models/Task";
import Step from "../models/Step";
import Activity from "../models/Activity";

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/momentum_db"
    );

    await Promise.all([
      // clear all data in the database
      await User.deleteMany({}),
      await Goal.deleteMany({}),
      await Task.deleteMany({}),
      await Step.deleteMany({}),
      await Activity.deleteMany({}),
    ]);

    console.log("Cleared database");

    // Seed Users
    await seedUsers();
    const users = await User.find().select("_id");
    console.log(`✅ Seeded ${users.length} users`);

    await seedGoals(users);
    const goals = await Goal.find().select("_id userId");
    console.log(`✅ Seeded ${goals.length} goals`);

    await seedTasks(goals);
    const tasks = await Task.find().select("_id goalId userId");
    console.log(`✅ Seeded ${tasks.length} tasks`);

    await seedSteps(tasks);
    console.log(`✅ Seeded steps`);

    console.log("Seeded database");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
