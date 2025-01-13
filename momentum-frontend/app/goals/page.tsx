"use client";

import AuthorizedLayout from "@/components/layout/AuthorizedLayout";
import NewGoalModal from "@/features/goalWizard/GoalWizardModal";
import { fetchGoals } from "@/services/goals/goalService";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const GoalsPage = () => {
  const { data } = useQuery({
    queryKey: ["goals"],
    queryFn: fetchGoals,
  });

  return (
    <AuthorizedLayout>
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((goal: any) => (
          <ul
            key={goal._id}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-bold text-gray-900">{goal.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
            <p className="text-sm text-gray-600 mt-1">
              Due Date: {goal.dueDate}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Priority: {goal.priority}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Category: {goal.category}
            </p>

            <Link href={`/goals/${goal._id}/tasks`}>View Tasks</Link>
          </ul>
        ))}
      </div>
    </AuthorizedLayout>
  );
};

export default GoalsPage;
