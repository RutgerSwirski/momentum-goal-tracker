import axiosInstance from "@/utils/axiosInstance";

// create a api call the the backend to create a new goal with tasks and steps - consolidated
export const createGoalWithTasksAndSteps = async (goalData: {
  name: string;
  description: string;
  dueDate: string;
  priority: string;
  category: string;
  tasks: Array<{
    name: string;
    description: string;
    dueDate: string;
    steps: Array<{
      name: string;
      type: "one-off" | "recurring";
      dueDate?: string;
      frequency?: "daily" | "weekly" | "monthly";
    }>;
  }>;
}) => {
  try {
    const response = await axiosInstance.post("/goals/consolidated", goalData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
