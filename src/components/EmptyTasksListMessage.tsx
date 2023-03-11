import styles from "./EmptyTasksListMessage.module.css";
import clipboard from "../assets/Clipboard.png";

const EmptyTasksListMessage = () => {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="clipboard icon" />
      <p className={styles.primaryTextMessage}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p className={styles.secondaryTextMessage}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
};

export default EmptyTasksListMessage;
