// use hook { useState }
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
