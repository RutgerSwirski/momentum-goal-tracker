import Step from "../models/Step";

// get steps by task
export const getStepsByTask = async (req: any, res: any) => {
  try {
    const { taskId } = req.params;

    const steps = await Step.find({ taskId });

    res.json({ steps });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
