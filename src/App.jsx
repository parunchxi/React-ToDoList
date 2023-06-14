import { useState } from "react";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handdleFormSubnit(event) {
    event.preventDefault();
    if (newTask) {
      setTasks((prevtasks) => [newTask, ...prevtasks]);
      setNewTask("");
    }
  }

  return (
    <>
      <div className="card">
        <h1>To-Do List</h1>
        <NewTaskForm
          newTask={newTask}
          handleInputChange={handleInputChange}
          handdleFormSubnit={handdleFormSubnit}
        />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
