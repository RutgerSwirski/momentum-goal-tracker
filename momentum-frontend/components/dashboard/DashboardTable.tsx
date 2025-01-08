import Card from "./Card";

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
      <h3 className="text-xl font-semibold mb-4">Tasks for Today</h3>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Task</th>
            <th className="p-2 border">Goal</th>
            <th className="p-2 border">Priority</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border">
              <td className="p-2">{task.name}</td>
              <td className="p-2">{task.goal}</td>
              <td className="p-2">
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
              <td className="p-2">
                <button className="text-teal-500 hover:underline">
                  Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default DashboardTable;
