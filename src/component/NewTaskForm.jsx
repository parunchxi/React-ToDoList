/* eslint-disable react/prop-types */
import "../assets/style/index.scss";

function NewTaskForm({ newTask, handleInputChange, handdleFormSubmit }) {
  return (
    <form onSubmit={handdleFormSubmit} className="input_form">
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTaskForm;
