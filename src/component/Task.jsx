/* eslint-disable react/prop-types */
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import styles from "./Task.module.scss";

function Task({ task, handleDelete, handleChecked, handleEdit }) {
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
        className={styles.edit}
        onClick={() => {
          handleEdit(task);
        }}
      >
        <RiEdit2Fill />
      </span>
      <span
        className={styles.delete}
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        <RiDeleteBin6Fill />
      </span>
    </li>
  );
}

export default Task;
