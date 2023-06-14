import { useEffect, useState } from "react";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    setTasks([]);
    tasks.map((task) => {
      if (task.task === event.target.parentElement.id) {
        if (task.complete === false) {
          task.complete = true;
        } else {
          task.complete = false;
        }
      }
      setTasks((prevtasks) => [...prevtasks, task]);
    });
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
