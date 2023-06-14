/* eslint-disable react/prop-types */
import styles from "./Task.module.scss";

function Task({ task, handleDelete }) {
  return (
    <li className={styles.task} id={task.task}>
      {task.task}
      <span onClick={handleDelete}>×</span>
    </li>
  );
}

export default Task;
