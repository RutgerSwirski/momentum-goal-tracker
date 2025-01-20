"use client";
import Breadcrumbs from "@/components/common/Breadcrumbs";
// const GoalsTasksPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data: goal } = useGoal(id);
//   const { data: tasks } = useTasks(id);

import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

//   return (
//     <Layout>
//       <PageHeader title={goal?.title} />
//       <TasksList tasks={tasks} />
//     </Layout>
//   );
// };

// export default GoalsTasksPage;

const GoalsTasksPage = () => {
  const params = useParams();
  const goalId = params?.goalId;

  // get the goal object from the BE
  const { data: goal } = useQuery({
    queryKey: ["goal", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}`);
      return response.data;
    },
  });

  // get the tasks for the goal from the BE
  const { data: tasks } = useQuery({
    queryKey: ["tasks", goalId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/goals/${goalId}/tasks`);
      return response.data.tasks;
    },
  });

  return (
    <>
      <Breadcrumbs
        customLabels={{
          goal: "Goals",
          [goalId]: goal?.name || "Loading...",
        }}
      />

      <div>
        <Link href="/goals">Back to goals</Link>

        <h1>Tasks for {goal?.name}</h1>
        <h3>{tasks?.length} tasks</h3>

        <ul>
          {tasks?.map((task) => (
            <li key={task._id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GoalsTasksPage;
