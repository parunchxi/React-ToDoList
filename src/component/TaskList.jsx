/* eslint-disable react/prop-types */
import Task from "./Task";
import styles from "./TaskList.module.scss";

function TaskList({ tasks, handleDelete, handleChecked }) {
  return (
    <ul className={styles.task_list}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
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
