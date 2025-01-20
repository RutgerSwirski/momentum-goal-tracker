import Card from "@/components/common/Card";

type DashboardTableProps = {
  tasks: {
    name: string;
    goal: string;
    priority: string;
  }[];
};

const DashboardTable = ({ tasks }: DashboardTableProps) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">Your Tasks</h3>

      {/* Table for Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto border-collapse rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Task</th>
              <th className="p-4 text-left">Goal</th>
              <th className="p-4 text-left">Priority</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-teal-50 transition-colors`}
              >
                <td className="p-4">{task.name}</td>
                <td className="p-4">{task.goal}</td>
                <td className="p-4">
                  <span
                    className={`text-xs font-semibold py-1 px-2 rounded ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-teal-500 hover:underline">
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stacked View for Mobile */}
      <div className="md:hidden space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm hover:bg-teal-50 transition-colors"
          >
            <p className="font-bold text-neutral_charcoal">{task.name}</p>
            <p className="text-sm text-gray-600">Goal: {task.goal}</p>
            <p className="text-sm">
              Priority:{" "}
              <span
                className={`text-xs font-semibold py-1 px-2 rounded ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>
            </p>
            <button className="text-teal-500 hover:underline mt-2">
              Complete
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DashboardTable;
