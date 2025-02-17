import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  type: { type: String, required: true, enum: ["Step", "Task", "Goal"] },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "type",
  },
  completedAt: { type: Date, default: Date.now },

  encouragements: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  shares: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("Activity", activitySchema);
