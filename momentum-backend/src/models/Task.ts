import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    goalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    dueDate: {
      type: Date,
      validate: {
        validator: function (v: Date) {
          return v >= new Date();
        },
        message: "Due date must be in the future",
      },
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    notes: {
      type: [String],
    },
    order: {
      type: Number,
      default: 0,
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
export default mongoose.model("Task", taskSchema);
