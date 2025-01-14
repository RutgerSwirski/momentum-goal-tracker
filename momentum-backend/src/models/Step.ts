import { model, Schema } from "mongoose";

const stepSchema = new Schema(
  {
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 1000,
    },

    description: {
      type: String,
      maxlength: 5000,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
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
