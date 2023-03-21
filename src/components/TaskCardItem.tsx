import styles from "./TaskCardItem.module.css";
import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";

interface TaskCardItemProps {
  task: { id: string; name: string; completed: boolean };
}

const TaskCardItem = (props: TaskCardItemProps) => {
  const { task } = props;
  const { completed, name, id } = task;

  return (
    <div className={styles.card}>
      {completed ? (
        <div className={styles.checked} title="Mark as not completed">
          <Check />
        </div>
      ) : (
        <div className={styles.checkbox} title="Complete task" />
      )}

      <p className={completed ? styles.completedTaskText : styles.taskText}>
        {name}
      </p>
      <button title="Delete task" className={styles.deleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
};

export default TaskCardItem;
