/* eslint-disable react/prop-types */
import styles from "./Task.module.scss";

function Task({ task, handleDelete, handleChecked }) {
  return (
    <li className={styles.task} id={task.task} onClick={handleChecked}>
      <span
        className={`${styles.task_name} ${
          task.complete ? `${styles.complete}` : ""
        }`}
      >
        {task.task}
      </span>
      <span className={styles.delete} onClick={handleDelete}>
        ×
      </span>
    </li>
  );
}

export default Task;
