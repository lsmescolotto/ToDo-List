import styles from "./TaskCardItem.module.css";
import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import { Task } from "../App";

interface TaskCardItemProps {
  task: Task;
  tasksList: Task[];
  setTasksList: Dispatch<SetStateAction<Task[]>>;
}

export const TaskCardItem = (props: TaskCardItemProps) => {
  const { task, tasksList, setTasksList } = props;
  const { completed, name, id } = task;

  const handleCompleteAndUncompleteTask = () => {
    const indexOfTask = tasksList.findIndex((taskItem) => taskItem.id === id);

    const tasksListCopy = [...tasksList];

    tasksListCopy.splice(indexOfTask, 1, {
      ...task,
      completed: !completed,
    });

    setTasksList(tasksListCopy);
  };

  const handleDeleteTask = () => {
    const newTasksList = tasksList.filter((taskItem) => taskItem.id !== id);
    setTasksList(newTasksList);
  };

  return (
    <div className={styles.card}>
      <div
        className={completed ? styles.checked : styles.checkbox}
        title={completed ? "Mark as not completed" : "Complete task"}
        onClick={handleCompleteAndUncompleteTask}
      >
        {completed && <Check />}
      </div>

      <p className={completed ? styles.completedTaskText : styles.taskText}>
        {name}
      </p>
      <button
        title="Delete task"
        className={styles.deleteTask}
        onClick={handleDeleteTask}
      >
        <Trash size={16} />
      </button>
    </div>
  );
};
