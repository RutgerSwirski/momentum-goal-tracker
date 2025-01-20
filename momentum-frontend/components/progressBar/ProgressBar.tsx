import clsx from "clsx";

const ProgressBar = ({
  completed,
  total,
  size = "sm",
}: {
  completed: number;
  total: number;
  size?: "sm" | "md" | "lg";
}) => {
  if (total === 0) {
    return null;
  }
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  const sizes = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  };
  const textSizes = {
    sm: "text-xs",
    md: "text-md",
    lg: "text-lg",
  };

  return (
    <div className="flex space-x-2 items-center w-full">
      <span className={clsx("font-semibold text-gray-600", textSizes[size])}>
        {percentage.toFixed(1)}%
      </span>
      <div className={clsx("w-full bg-gray-200 rounded-full", sizes[size])}>
        <div
          className={clsx(
            "bg-blue-500 rounded-full transition-all",
            sizes[size]
          )}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
