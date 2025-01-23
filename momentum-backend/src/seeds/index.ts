import mongoose from "mongoose";
import seedUsers from "./UserSeeds";
import seedGoals from "./GoalSeeds";
import seedTasks from "./TaskSeeds";
import seedSteps from "./StepSeeds";

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/momentum_db"
    );

    console.log("Connected to MongoDB");

    await seedUsers();
    await seedGoals();
    await seedTasks();
    await seedSteps();

    console.log("Seeded database");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
