import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {/* create a list using map array method */}
      {tasks.map((task) => (
        // use key to set each child of parent with unique identifier
        <Task key={task.id} task={task}/>
      ))}
    </>
  );
};

export default Tasks;
