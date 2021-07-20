// use hook { useState }
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // fn to hide addTask section (set to false)
  const [showAddTask, setShowAddTask] = useState(false)
  // by adding tasks fn in App.js, they become globally available rather than only in Tasks.js
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Jan 6th at 7:56am",
      reminder: true,
    },
    {
      id: 2,
      text: "Parent-Teacher Conference",
      day: "Aug 2nd at 5:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Preschool Open House",
      day: "July 30th at 9:00am",
      reminder: false,
    },
  ])

  // add task
  const addTask = (task) => {
    // without a backend to generate id dynamically, can use simple fn to generate random id
    const id = Math.floor(Math.random() * 10000) + 1

    // create object with that id and then copy text, day, reminder using spread
    const newTask  = { id, ...task }

    // use setTasks as array, to copy the current tasks, and add newTask
    setTasks([...tasks, newTask])
  }

  // delete task fn
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    // map through tasks, spread task properties, change reminder to the opposite of what it is with a double-click
    setTasks(tasks.map((task) => task.id === id ? {  ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* pass in prop to delete tasks */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete ={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Display'}
    </div>
  );
}

export default App;
