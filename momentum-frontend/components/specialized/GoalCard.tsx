import React from "react";
import Card from "../common/Card";

type GoalCardProps = {
  goal: {
    _id: string;
    name: string;
    dueDate: string;
    priority: "high" | "medium" | "low" | "none";
    completedSteps: number;
    totalSteps: number;
    status: string;
    category: string;
  };
  onClick?: () => void; // Optional click handler
  className?: string; // Optional styling
};

const GoalCard: React.FC<GoalCardProps> = ({ goal, onClick, className }) => {
  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "🔥 High";
      case "medium":
        return "⚠️ Medium";
      case "low":
        return "✅ Low";
      default:
        return "None";
    }
  };

  return (
    <Card onClick={onClick} className={className}>
      <div className="flex justify-between items-center p-4 hover:bg-gray-50">
        <div className="flex flex-col space-y-4 w-full">
          {/* Metadata */}
          <div className="flex items-start gap-4">
            <span className="text-xs text-gray-500 border rounded-full px-4 py-1">
              {new Date(goal.dueDate).toDateString()}
            </span>
            <span className="text-xs text-gray-500 border rounded-full px-4 py-1">
              {getPriorityLabel(goal.priority)}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-base font-semibold text-gray-800 truncate">
            {goal.name}
          </h4>

          {/* Progress Bar */}
          <div className="flex-1 w-full">
            <ProgressBar
              completed={(goal.completedSteps / goal.totalSteps) * 100}
              total={100}
            />
          </div>

          {/* Tags */}
          <div className="flex items-center space-x-4">
            <span
              className={`text-xs text-white border rounded-full px-4 py-1 ${
                goal.status === "Active"
                  ? "bg-green-500"
                  : goal.status === "Completed"
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            >
              {goal.status}
            </span>

            <span className="text-xs text-gray-500 border rounded-full bg-gray-100 px-4 py-1">
              🎯 {goal.category}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
