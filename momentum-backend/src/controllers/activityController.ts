import Activity from "../models/Activity";

export const getActivities = async (req: any, res: any) => {
  try {
    const activities = await Activity.find()
      .sort({ completedAt: -1 })
      .limit(30)
      .populate("userId", "firstName lastName email profilePicture")
      .populate("relatedId", "name title status description");

    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
