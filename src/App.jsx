import { useEffect, useState } from "react";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import EditTaskForm from "./component/EditTaskForm";

function App() {
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [newEditTask, setNewEditTask] = useState("");
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
      setTasks((prevtasks) => [
        {
          id: crypto.randomUUID().slice(0, 5),
          task: newTask,
          complete: false,
        },
        ...prevtasks,
      ]);
      setNewTask("");
    }
  }

  function handleChecked(id) {
    setTasks([]);
    tasks.map((task) => {
      if (task.id === id) {
        if (task.complete === false) {
          task.complete = true;
        } else {
          task.complete = false;
        }
      }
      setTasks((prevtasks) => [...prevtasks, task]);
    });
  }

  function handleDelete(id) {
    const newTaskList = tasks.filter((task) => id !== task.id);
    setTasks(newTaskList);
  }

  function handleEdit(task) {
    setEditTask(task);
    setNewEditTask(task.task);
  }

  function handleEditChange(event) {
    setNewEditTask(event.target.value);
  }

  function handleEditSubmit(event) {
    event.preventDefault();
    setTasks([]);
    tasks.map((task) => {
      if (task.id === editTask.id) {
        task.task = newEditTask;
      }
      setTasks((prevtasks) => [...prevtasks, task]);
    });
    setEditTask("");
    setNewEditTask("");
  }

  function handleEditCancel(event) {
    event.preventDefault();
    setEditTask("");
    setNewEditTask("");
  }

  return (
    <>
      {editTask && (
        <EditTaskForm
          newEditTask={newEditTask}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          handleEditCancel={handleEditCancel}
        />
      )}
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
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
