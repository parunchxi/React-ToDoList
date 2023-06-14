function NewTaskForm({ newTask, handleInputChange, handdleFormSubnit }) {
  return (
    <form onSubmit={handdleFormSubnit}>
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
