"use client";

import ProgressBar from "@/components/progressBar/ProgressBar";
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

      <ul className="flex flex-col space-y-4">
        {data?.map((goal: any) => (
          <li
            onClick={() => router.push(`/goals/${goal._id}`)}
            key={goal._id}
            className="border bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
          >
            <div className="flex justify-between items-center p-4 hover:bg-gray-50">
              <div className="flex flex-col space-y-2 w-full">
                <h4 className="text-sm font-semibold text-gray-800">
                  {goal.name}
                </h4>
                <p className="text-xs text-gray-600">{goal.description}</p>

                <div className="flex items-center space-x-4">
                  <div className="flex-1 max-w-sm">
                    <ProgressBar
                      completed={(Math.random() * 100).toFixed(0)}
                      total={100}
                    />
                  </div>

                  <span className="text-xs text-gray-500">{goal.status}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(goal.dueDate).toDateString()}
                  </span>
                  <span className="text-xs text-gray-500">
                    {goal.priority === "high"
                      ? "🔥 High"
                      : goal.priority === "medium"
                      ? "⚠️ Medium"
                      : goal.priority === "low"
                      ? "✅ Low"
                      : "None"}
                  </span>
                  <span className="text-xs text-gray-500">{goal.category}</span>
                </div>
              </div>

              <div className="flex space-x-4 text-sm text-blue-600">
                <button className="hover:underline">Edit</button>
                <button className="hover:underline text-red-500">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GoalsPage;
