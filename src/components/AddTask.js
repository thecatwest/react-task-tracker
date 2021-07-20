import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    //   preventDefault() to prevent sending submit to another page
    e.preventDefault()

    // validate data input for task text
    if(!text) {
        alert('Please add task text')
        return
    }

    // otherwise, call onAdd and pass in object w/ text, day, reminder
    onAdd({ text, day, reminder })

    // then, clear form on submit
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text"
          placeholder="Add Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
