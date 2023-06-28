import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext(null);

const TaskContextProvider = ({ children }) => {
  // New Task State
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      // Get saved task
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  // Edit Task State
  const [editTask, setEditTask] = useState("");
  const [newEditTask, setNewEditTask] = useState("");

  // Save Task Data
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // New Task
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

  // Mark Task to complete
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

  // Delete Task
  function handleDelete(id) {
    const newTaskList = tasks.filter((task) => id !== task.id);
    setTasks(newTaskList);
  }

  // Edit Task
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

  const contextValue = {
    tasks,
    newTask,
    editTask,
    newEditTask,
    handleInputChange,
    handdleFormSubmit,
    handleChecked,
    handleDelete,
    handleEdit,
    handleEditChange,
    handleEditSubmit,
    handleEditCancel,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
