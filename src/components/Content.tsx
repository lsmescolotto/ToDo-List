import styles from "./Content.module.css";
import EmptyTasksListMessage from "./EmptyTasksListMessage";
import TasksCounter from "./TasksCounter";

const Content = () => {
  return (
    <main className={styles.main}>
      <section className={styles.tasksSection}>
        <header className={styles.tasksHeader}>
          <TasksCounter
            title="Tarefas criadas"
            titleColor="blue"
            countNumber={0}
          />
          <TasksCounter
            title="Concluídas"
            titleColor="purple"
            countNumber={0}
          />
        </header>
        <EmptyTasksListMessage />
      </section>
    </main>
  );
};

export default Content;
