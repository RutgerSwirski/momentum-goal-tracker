import Goal from "../models/Goal";
import Step from "../models/Step";
import Task from "../models/Task";
import jwt from "jsonwebtoken";

export const getDashboard = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    // get the token from the cookies
    const token = req.cookies?.authToken;

    //decode the user from the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };

    //get the userId from the decoded user
    const userId = decoded.id;

    // get goals, tasks and steps for the user
    const goals = await Goal.find({ userId });

    const tasks = await Task.find({ userId });

    const steps = await Step.find({ userId });

    // completed goals
    const completedGoals = goals.filter(
      (goal) => goal.status === "completed"
    ).length;

    const completedTasks = tasks.filter(
      (task) => task.status === "completed"
    ).length;

    const today = new Date().toISOString().split("T")[0];

    const completedStepsToday = new Set(
      steps.filter(
        (step) => step.dateCompleted?.toISOString().split("T")[0] === today
      )
    ).size;

    const progressPoints =
      completedGoals * 5 + completedTasks * 3 + completedStepsToday * 1;

    const totalPossiblePoints =
      goals.length * 5 + tasks.length * 3 + steps.length * 1;

    const progress = Math.min(progressPoints / totalPossiblePoints, 1);

    // get the 5 next steps based on due date
    const nextSteps = steps
      .filter(
        (step) =>
          step.dueDate instanceof Date && step.dueDate.getTime() >= Date.now()
      ) // Ensure dueDate is a Date
      .sort(
        (a, b) => (a.dueDate as Date).getTime() - (b.dueDate as Date).getTime()
      ) // Sort by date
      .slice(0, 5);

    console.log({ nextSteps, goals, tasks, steps });

    return res.status(200).json({
      progress: progress.toFixed(2),
      completedGoals,
      completedTasks,
      completedStepsToday,
      nextSteps,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};
