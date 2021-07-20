// use hook { useState }
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // fn to hide addTask section (set to false)
  const [showAddTask, setShowAddTask] = useState(false);
  // by adding tasks fn in App.js, they become globally available rather than only in Tasks.js
  const [tasks, setTasks] = useState([]);

  useEffect (() => {
    // async fn that calls fetchTasks, which returns a promise
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
    // add dependency array, if have a value that changes on run, you'd pass it here. W/o, pass in empty array
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // console.log(data);
    return data
  }

  // add task
  const addTask = (task) => {
    // without a backend to generate id dynamically, can use simple fn to generate random id
    const id = Math.floor(Math.random() * 10000) + 1;

    // create object with that id and then copy text, day, reminder using spread
    const newTask = { id, ...task };

    // use setTasks as array, to copy the current tasks, and add newTask
    setTasks([...tasks, newTask]);
  };

  // delete task fn
  const deleteTask = async (id) => {
    // make delete request
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    // map through tasks, spread task properties, change reminder to the opposite of what it is with a double-click
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* pass in prop to delete tasks */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Display"
      )}
    </div>
  );
}

export default App;
