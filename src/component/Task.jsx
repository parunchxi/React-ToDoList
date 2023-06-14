import styles from "./Task.module.scss";

function Task({ task }) {
  return (
    <li className={styles.task}>
      {task}
      <span>×</span>
    </li>
  );
}

export default Task;
