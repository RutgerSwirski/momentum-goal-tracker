const GoalMetadata = ({ goal, goalIsLoading }) => {
  if (goalIsLoading) {
    return <div className="text-gray-500 text-sm">Loading...</div>;
  }

  if (!goal) {
    return <div className="text-gray-500 text-sm">No goal data available.</div>;
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
      value: `${daysLeft} ${daysLeft === 1 ? "day" : "days"}`,
      label: "Days Left",
    },
    createdAt: {
      icon: "🕒",
      value: new Date(goal.createdAt).toDateString(),
      label: "Created At",
    },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {Object.keys(metadata).map((key) => (
        <div
          key={key}
          className="flex flex-col items-start p-4 bg-gray-50 border rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-lg">{metadata[key].icon}</span>
            <span className="text-sm font-medium text-gray-600">
              {metadata[key].label}
            </span>
          </div>
          <span className="text-base font-semibold text-gray-900 capitalize">
            {metadata[key].value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default GoalMetadata;
