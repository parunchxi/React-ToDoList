/* eslint-disable react/prop-types */
import Task from "./Task";
import styles from "./TaskList.module.scss";

function TaskList({ tasks }) {
  return (
    <ul className={styles.task_list}>
      {tasks.map((task, index) => {
        return <Task key={index} task={task} />;
      })}
    </ul>
  );
}

export default TaskList;
