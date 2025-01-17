const GoalMetadata = ({ goal, goalIsLoading }) => {
  if (!goal) {
    return <div>Loading...</div>;
  }

  const daysLeft = Math.max(
    0,
    Math.floor(
      (new Date(goal?.dueDate).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const metadata = {
    priority: {
      icon:
        goal.priority === "high"
          ? "🔥"
          : goal.priority === "medium"
          ? "⚠️"
          : "✅",
      value: goal.priority,
      label: "Priority",
    },
    category: {
      icon: "🏷️",
      value: goal.category,
      label: "Category",
    },
    dueDate: {
      icon: "📅",
      value: new Date(goal.dueDate).toDateString(),
      label: "Due Date",
    },
    daysLeft: {
      icon: "⏳",
      value: daysLeft,
      label: "Days Left",
    },

    createdAt: {
      icon: "🕒",
      value: new Date(goal.createdAt).toDateString(),
      label: "Created At",
    },
  };

  if (goalIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex space-x-12">
      {Object.keys(metadata).map((key) => (
        <div key={key} className="flex  space-y-2 flex-col">
          <div className="flex items-center space-x-2 text-gray-400">
            {/* <span>{metadata[key].icon}</span> */}
            <span className="text-sm text-gray-600 font-medium uppercase">
              {metadata[key].label}
            </span>
          </div>
          <span className="text-base text-gray-900 capitalize">
            {metadata[key].value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default GoalMetadata;
