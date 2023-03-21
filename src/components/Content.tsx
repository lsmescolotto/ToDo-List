import styles from "./Content.module.css";
import EmptyTasksListMessage from "./EmptyTasksListMessage";
import TaskCardItem from "./TaskCardItem";
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
        <TaskCardItem
          task={{
            name: "I'm a very very very very very very very cool task",
            id: "1",
            completed: false,
          }}
        />
        <TaskCardItem
          task={{
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            id: "1",
            completed: true,
          }}
        />
      </section>
    </main>
  );
};

export default Content;
