const ProgressBar = ({ completed, total, label }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <>
      <h3>{label}</h3>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-center text-sm mt-1">
        {completed}/{total} ({percentage.toFixed(1)}%)
      </p>
    </>
  );
};

export default ProgressBar;
