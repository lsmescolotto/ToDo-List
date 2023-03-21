import styles from "./TasksCounter.module.css";

interface TasksCounterProps {
  title: string;
  titleColor: "blue" | "purple";
  countNumber: number;
  total?: number;
}

const TasksCounter = (props: TasksCounterProps) => {
  const { title, titleColor, countNumber, total } = props;

  return (
    <div className={styles.container}>
      <h4
        className={`${styles.title} ${
          titleColor === "blue" ? styles.blueTitle : styles.purpleTitle
        }`}
      >
        {title}
      </h4>
      <span className={styles.countNumber}>
        {total ? `${countNumber} of ${total}` : countNumber}
      </span>
    </div>
  );
};

export default TasksCounter;
