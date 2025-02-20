import { model, Schema } from "mongoose";

const stepSchema = new Schema(
  {
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
      index: true,
    },
    goalId: {
      type: Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      maxlength: 5000,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "in-progress"],
      default: "pending",
    },
    dateCompleted: {
      type: Date,
    },
    dueDate: {
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
