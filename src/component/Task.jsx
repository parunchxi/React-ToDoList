/* eslint-disable react/prop-types */
import styles from "./Task.module.scss";

function Task({ task, handleDelete, handleChecked }) {
  return (
    <li className={styles.task}>
      <span
        className={`${styles.task_name} ${
          task.complete ? `${styles.complete}` : ""
        }`}
        onClick={() => {
          handleChecked(task.id);
        }}
      >
        {task.task}
      </span>
      <span
        className={styles.delete}
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        ×
      </span>
    </li>
  );
}

export default Task;
