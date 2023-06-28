import Task from "./Task";
import styles from "./TaskList.module.scss";

function TaskList({ tasks, handleDelete, handleChecked, handleEdit }) {
  return (
    <ul className={styles.task_list}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
            handleEdit={handleEdit}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
