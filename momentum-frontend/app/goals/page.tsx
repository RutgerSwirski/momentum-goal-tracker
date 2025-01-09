"use client";

import AuthorizedLayout from "@/components/layout/AuthorizedLayout";
import { fetchGoals } from "@/services/goalService";
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
      <ul>
        {data?.map((goal: any) => (
          <li key={goal._id}>{goal.name}</li>
        ))}
      </ul>
    </AuthorizedLayout>
  );
};

export default GoalsPage;
