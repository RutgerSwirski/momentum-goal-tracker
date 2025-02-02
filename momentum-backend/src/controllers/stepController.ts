import Step from "../models/Step";

export const getSteps = async (req: any, res: any) => {
  try {
    const steps = await Step.find();

    res.status(200).json({ steps });
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
    const { stepId } = req.params;

    const step = await Step.findById(stepId);

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
