"use client";

import NewGoalModal from "@/features/goalWizard/GoalWizardModal";
import { fetchGoals } from "@/services/goals/goalService";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GoalsPage = () => {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["goals"],
    queryFn: fetchGoals,
  });

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Your Goals</h1>
            <p className="text-base text-gray-600">
              Set your goals and track your progress. Big dreams, one step at a
              time.
            </p>
          </div>

          <NewGoalModal />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="text-sm font-medium text-gray-900">Search</label>

            <input
              type="text"
              placeholder="Search goals"
              className="w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* filters */}
            <div>
              <label className="text-sm font-medium text-gray-900">
                Status
              </label>

              <select className=" block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="not-started">Not Started</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">
                Category
              </label>
              <select className=" block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option value="all">All</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="fitness">Fitness</option>
                <option value="learning">Learning</option>
                <option value="social">Social</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">
                Priority
              </label>
              <select className=" block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Type</label>

              <select className=" block w-full rounded-lg border bg-gray-100 py-2 px-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option value="all">All</option>
                <option value="one-off">One-time</option>
                <option value="recurring">Recurring</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Goal Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Due Date</th>
            <th className="py-3 px-6 text-left">Priority</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Progress</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {data?.map((goal: any) => (
            <tr
              onClick={() => router.push(`/goals/${goal._id}`)}
              key={goal._id}
              className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <td className="py-3 px-6 text-left font-bold text-gray-900">
                {goal.name}
              </td>
              <td className="py-3 px-6 text-left">{goal.description}</td>
              <td className="py-3 px-6 text-left">
                {new Date(goal.dueDate).toDateString()}
              </td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs font-semibold ${
                    goal.priority === "high"
                      ? "bg-red-100 text-red-600"
                      : goal.priority === "medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {goal.priority}
                </span>
              </td>
              <td className="py-3 px-6 text-left">{goal.category}</td>
              <td className="py-3 px-6 text-left">
                <div className="relative w-full bg-gray-200 h-4 rounded-full">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{
                      width: `${goal.progress || 0}%`, // Replace with the actual progress value
                    }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-1">
                  {goal.progress || 0}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GoalsPage;
