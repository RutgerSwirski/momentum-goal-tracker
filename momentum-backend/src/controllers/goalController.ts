import Goal from "../models/Goal";

export const createGoal = async (req: any, res: any) => {
  const { title, description, dueDate, priority, status, category } = req.body;

  try {
    const goal = new Goal({
      userId: req.userId,
      title,
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
  res.json([{ id: 1, title: "Goal 1" }]);
  // try {
  //   console.log(req.userId, "req.userId");
  //   const goals = (await Goal.find({ userId: req.userId })) || [];

  //   res.status(200).json(goals);
  // } catch (error) {
  //   res.status(500).json({ message: "Something went wrong" });
  // }
};

export const getGoal = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const goal = await Goal.findOne({ userId: req.userId, _id: id });
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateGoal = async (req: any, res: any) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, status, category } = req.body;

  try {
    await Goal.findOneAndUpdate(
      { userId: req.userId, _id: id },
      { title, description, dueDate, priority, status, category }
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
