import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import Navbar from "./component/Navbar";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import EditTaskForm from "./component/EditTaskForm";

function App() {
  const {
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
  } = useContext(TaskContext);

  return (
    <>
      <Navbar />
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
