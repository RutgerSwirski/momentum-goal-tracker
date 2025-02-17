import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    goalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
      index: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
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
      maxlength: 500,
    },
    dueDate: {
      type: Date,
      validate: {
        validator: function (v: Date) {
          if (!v) return true;

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
    progress: {
      type: Number,
      default: 0,
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
