/* eslint-disable react/prop-types */
import Task from "./Task";
import styles from "./TaskList.module.scss";

function TaskList({ tasks, handleDelete, handleChecked }) {
  return (
    <ul className={styles.task_list}>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
