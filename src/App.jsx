import { useState } from "react";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handdleFormSubmit(event) {
    event.preventDefault();
    if (newTask) {
      const newTaskObject = {
        task: newTask,
        complete: false,
      };
      setTasks((prevtasks) => [newTaskObject, ...prevtasks]);
      setNewTask("");
    }
  }

  function handleChecked(event) {
    tasks.map((task) => {
      if (task.task === event.target.parentElement.id) {
        if (task.complete === false) {
          task.complete = true;
        } else {
          task.complete = false;
        }
      }
    });
    console.log(event.target.parentElement.id);
  }

  function handleDelete(event) {
    const newTaskList = tasks.filter(
      (task) => event.target.parentElement.id !== task.task
    );
    setTasks(newTaskList);
  }

  return (
    <>
      <div className="card">
        <h1>To-Do List</h1>
        <NewTaskForm
          newTask={newTask}
          handleInputChange={handleInputChange}
          handdleFormSubmit={handdleFormSubmit}
        />
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleChecked={handleChecked}
        />
      </div>
    </>
  );
}

export default App;
