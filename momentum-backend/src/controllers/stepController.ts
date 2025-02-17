import jwt from "jsonwebtoken";
import Activity from "../models/Activity";
import Goal from "../models/Goal";
import Step from "../models/Step";
import Task from "../models/Task";

export const getSteps = async (req: any, res: any) => {
  try {
    const steps = await Step.find();

    res.status(200).json(steps);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getStep = async (req: any, res: any) => {
  try {
    const { stepId } = req.params;

    const step = await Step.findById(stepId);

    res.json({ step });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createStep = async (req: any, res: any) => {
  try {
    const { name, taskId } = req.body;

    const step = new Step({ name, taskId });

    await step.save();

    res.json({ step });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateStep = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const step = await Step.findById(id);

    if (!step) {
      return res.status(404).json({ message: "Step not found" });
    }

    const { name, status } = req.body;

    step.name = name || step.name;
    step.status = status || step.status;

    await step.save();

    res.json({ step });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteStep = async (req: any, res: any) => {
  try {
    const { stepId } = req.params;

    await Step.findOneAndDelete({ userId: req.userId, _id: stepId });

    res.status(200).json({ message: "Step deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// custom route to mark a step as complete
export const markStepComplete = async (req: any, res: any) => {
  const { id } = req.params;

  // get the token from the cookies
  const token = req.cookies?.authToken;

  //decode the user from the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
  };

  //get the userId from the decoded user
  const userId = decoded.id;

  const step = await Step.findById(id);

  if (!step) {
    return res.status(404).json({ message: "Step not found" });
  }

  await Step.findOneAndUpdate({ _id: id }, { status: "completed" });

  // get and update the task progress associated with the step
  const task = await Task.findOne({ _id: step.taskId });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const steps = await Step.find({ taskId: step.taskId });
  const completedSteps = steps.filter(
    (step) => step.status === "completed"
  ).length;
  const taskProgress = Math.floor((completedSteps / steps.length) * 100);
  await Task.findOneAndUpdate({ _id: step.taskId }, { progress: taskProgress });

  // Get the associated goal
  const goal = await Goal.findById(task.goalId);
  if (!goal) {
    return res.status(404).json({ message: "Goal not found" });
  }

  // Get all tasks associated with this goal
  const tasks = await Task.find({ goalId: goal._id });

  const totalTasks = tasks.length;
  if (totalTasks === 0) {
    await Goal.findByIdAndUpdate(goal._id, { progress: 0 });
    return res.json({ success: true, goalProgress: 0 });
  }

  let goalProgress = 0;

  await Promise.all(
    tasks.map(async (task) => {
      const steps = await Step.find({ taskId: task._id });

      const totalSteps = steps.length;

      const completedSteps = steps.filter(
        (step) => step.status === "completed"
      ).length;

      // Calculate task progress (rounded)
      const taskProgress =
        totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 100;

      // Update task progress in the database
      await Task.findByIdAndUpdate(task._id, { progress: taskProgress });

      // Each task contributes equally to goal progress
      goalProgress += (1 / totalTasks) * taskProgress;
    })
  );

  // ✅ Ensure proper rounding so goal progress reaches exactly 100% when all tasks are complete
  goalProgress = Math.round(goalProgress);

  // Update goal progress in the database
  await Goal.findByIdAndUpdate(goal._id, { progress: goalProgress });

  try {
    await Activity.create({
      userId,
      type: "Step",
      relatedId: id,
      message: `Completed step: ${step.name}`,
      completedAt: new Date(),
    });
  } catch (error) {
    console.log("Error creating activity", error);
  }

  res.json({ success: true, goalProgress });
};
