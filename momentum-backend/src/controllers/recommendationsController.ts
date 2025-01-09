import { generateRecommendations } from "../services/openaiService";

// function that generates recommendations for tasks based on a goal string
export const generateTaskRecommendations = async (req: any, res: any) => {
  const { goal } = req.body;

  const prompt = `The user wants to achieve the goal: ${goal}. Generate 3 - 5 tasks they should complete to accomplish this goal`;

  try {
    const response = await generateRecommendations(prompt);
    const tasks = response.split("\n").filter((task) => task.length > 0);

    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error generating task recommendations:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// function that generates recommendations for steps based on a task string
export const generateStepRecommendations = async (req: any, res: any) => {
  const { task } = req.body;

  const prompt = `The user wants to complete the task: ${task}. Generate 3 - 5 steps they should take to complete this task`;

  try {
    const response = await generateRecommendations(prompt);
    const steps = response.split("\n").filter((step) => step.length > 0);

    res.status(200).json({ steps });
  } catch (error) {
    console.error("Error generating step recommendations:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
