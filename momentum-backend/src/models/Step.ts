import { model, Schema } from "mongoose";

const stepSchema = new Schema(
  {
    goalId: {
      type: Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
      index: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    dateCompleted: {
      type: Date,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default model("Step", stepSchema);
