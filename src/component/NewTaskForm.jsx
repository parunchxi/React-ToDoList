import styles from "./NewTaskForm.module.scss";

function NewTaskForm({ newTask, handleInputChange, handdleFormSubnit }) {
  return (
    <form onSubmit={handdleFormSubnit} className={styles.input_form}>
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
