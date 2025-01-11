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
      <ul></ul>
      <NewGoalModal />
    </AuthorizedLayout>
  );
};

export default GoalsPage;
