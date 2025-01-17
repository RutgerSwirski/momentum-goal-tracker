import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </ul>
  );
};

export default TaskList;
