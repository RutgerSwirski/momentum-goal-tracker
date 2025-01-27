import mongoose from "mongoose";
import seedUsers from "./UserSeeds";
import seedGoals from "./GoalSeeds";
import seedTasks from "./TaskSeeds";
import seedSteps from "./StepSeeds";
import User from "../models/User";
import Goal from "../models/Goal";
import Task from "../models/Task";

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/momentum_db"
    );

    console.log("Connected to MongoDB");

    await seedUsers();
    const users = await User.find({}, "_id");
    const userIds = users.map((user) => user._id.toString());

    await seedGoals(userIds);

    const goals = await Goal.find({}, "_id");
    const goalIds = goals.map((goal) => goal._id.toString());

    await seedTasks(goalIds);

    const tasks = await Task.find({}, "_id");
    const taskIds = tasks.map((task) => task._id.toString());

    await seedSteps(taskIds);

    console.log("Seeded database");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
