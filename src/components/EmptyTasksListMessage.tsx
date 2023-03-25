import styles from "./EmptyTasksListMessage.module.css";
import clipboard from "../assets/Clipboard.png";

export const EmptyTasksListMessage = () => {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="clipboard icon" />
      <p className={styles.primaryTextMessage}>
        You don't have any registered task
      </p>
      <p className={styles.secondaryTextMessage}>
        Add tasks and organize your to-dos
      </p>
    </div>
  );
};
