"use client";

import AuthorizedLayout from "@/components/layout/AuthorizedLayout";
import NewGoalModal from "@/features/goalWizard/GoalWizardModal";
import { fetchGoals } from "@/services/goals/goalService";
import { useQuery } from "@tanstack/react-query";

const GoalsPage = () => {
  const { data } = useQuery({
    queryKey: ["goals"],
    queryFn: fetchGoals,
  });

  console.log(data);

  return (
    <AuthorizedLayout>
      <h1>Goals</h1>

      <NewGoalModal />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((goal: any) => (
          <li
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
          </li>
        ))}
      </div>
    </AuthorizedLayout>
  );
};

export default GoalsPage;
