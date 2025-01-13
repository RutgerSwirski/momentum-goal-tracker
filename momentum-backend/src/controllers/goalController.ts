import jwt from "jsonwebtoken";
import Goal from "../models/Goal";
import mongoose from "mongoose";
import Task from "../models/Task";
import Step from "../models/Step";

export const createGoal = async (req: any, res: any) => {
  const { name, description, dueDate, priority, status, category } = req.body;

  try {
    const goal = new Goal({
      userId: req.userId,
      name,
      description,
      dueDate,
      priority,
      status,
      category,
    });

    await goal.save();
    res.status(201).json({ message: "Goal created" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getGoals = async (req: any, res: any) => {
  // get the token from the cookies
  const token = req.cookies?.authToken;

  //decode the user from the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
  };

  //get the userId from the decoded user
  const userId = decoded.id;

  try {
    const goals = (await Goal.find({ userId })) || [];
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getGoal = async (req: any, res: any) => {
  const { id } = req.params;

  // get the token from the cookies
  const token = req.cookies?.authToken;

  //decode the user from the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
  };

  //get the userId from the decoded user
  const userId = decoded.id;

  try {
    const goal = await Goal.findOne({ userId, _id: id });
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateGoal = async (req: any, res: any) => {
  const { id } = req.params;
  const { name, description, dueDate, priority, status, category } = req.body;

  try {
    await Goal.findOneAndUpdate(
      { userId: req.userId, _id: id },
      { name, description, dueDate, priority, status, category }
    );
    res.status(200).json({ message: "Goal updated" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteGoal = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    await Goal.findOneAndDelete({ userId: req.userId, _id: id });
    res.status(200).json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTasksByGoal = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const tasks = await Task.find({ goalId: id, deleted: false });

    if (!tasks) {
      return res.status(404).json({ message: "Tasks not found" });
    }

    return res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// create goal with tasks and steps
export const createGoalWithTasksAndSteps = async (req: any, res: any) => {
  // get the token from the cookies
  const token = req.cookies?.authToken;

  //decode the user from the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
  };

  // const session = await mongoose.startSession();
  // session.startTransaction();

  try {
    const { name, description, dueDate, priority, status, category, tasks } =
      req.body;

    const goal = new Goal({
      userId: decoded.id,
      name,
      description,
      dueDate,
      priority,
      status,
      category,
    });

    const createdGoal = await goal.save();

    const goalId = createdGoal._id;

    // if there are tasks, create them
    if (tasks && tasks.length > 0) {
      for (const taskData of tasks) {
        const task = new Task({
          ...taskData,
          goalId,
          userId: req.userId,
        });
        await task.save();

        const steps = taskData.steps || [];

        // if there are steps, create them
        if (steps.length > 0) {
          for (const stepData of steps) {
            const step = new Step({
              ...stepData,
              taskId: task._id,
              userId: req.userId,
            });
            await step.save();
          }
        }
      }
    }

    return res.status(201).json({ message: "Goal created" });

    // await session.commitTransaction();
    // session.endSession();
  } catch (error) {
    // await session.abortTransaction();
    // session.endSession();
    res.status(500).json({ message: "Something went wrong" });
    console.error(error);
  }
};
