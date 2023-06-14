/* eslint-disable react/prop-types */
import "../assets/style/index.scss";
import styles from "./EditTaskForm.module.scss";

function EditTaskForm({
  newEditTask,
  handleEditChange,
  handleEditSubmit,
  handleEditCancel,
}) {
  return (
    <div className={styles.edit_form}>
      <div className={`card ${styles.card}`}>
        <h1>Edit Task</h1>
        <form onSubmit={handleEditSubmit} className="input_form">
          <input
            type="text"
            placeholder="Edit Task"
            value={newEditTask}
            onChange={handleEditChange}
          />
          <button type="submit" className={styles.submit}>
            Submit
          </button>
          <button className={styles.cancel} onClick={handleEditCancel}>
            Cancel
          </button>
        </form>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
}

export default EditTaskForm;
