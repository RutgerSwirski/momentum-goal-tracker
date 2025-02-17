import Goal from "../models/Goal";
import Step from "../models/Step";
import Task from "../models/Task";
import jwt from "jsonwebtoken";

export const getDashboard = async (req: any, res: any) => {
  try {
    // get the token from the cookies
    const token = req.cookies?.authToken;

    //decode the user from the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };

    //get the userId from the decoded user
    const userId = decoded.id;

    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const upcomingGoals = await Goal.find({
      userId,
      dueDate: {
        $gte: today,
        $lte: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000),
      },
    }).select("name dueDate");

    const upcomingTasks = await Task.find({
      userId,
      dueDate: {
        $gte: today,
        $lte: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000),
      },
    })
      .select("name dueDate goalId")
      .populate("goalId", "name");

    const steps = await Step.find({ userId }).populate({
      path: "taskId",
      select: "name goalId",
      populate: {
        path: "goalId",
        select: "name",
      },
    });

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

    return res.status(200).json({
      upcomingGoals,
      upcomingTasks,
      nextSteps,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};
