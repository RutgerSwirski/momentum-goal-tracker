import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </ul>
  );
};

export default TaskList;
