import { Dispatch, SetStateAction } from "react";
import { Task } from "../App";
import styles from "./Content.module.css";
import { EmptyTasksListMessage } from "./EmptyTasksListMessage";
import { TaskCardItem } from "./TaskCardItem";
import { TasksCounter } from "./TasksCounter";

interface ContentProps {
  tasksList: Task[];
  setTasksList: Dispatch<SetStateAction<Task[]>>;
}

export const Content = (props: ContentProps) => {
  const { tasksList, setTasksList } = props;

  const completedTasksAmount = tasksList.filter(
    (task) => task.completed
  ).length;

  return (
    <main className={styles.main}>
      <section className={styles.tasksSection}>
        <header className={styles.tasksHeader}>
          <TasksCounter
            title="Created tasks"
            titleColor="blue"
            countNumber={tasksList.length}
          />
          <TasksCounter
            title="Completed"
            titleColor="purple"
            countNumber={completedTasksAmount}
            total={tasksList.length > 0 ? tasksList.length : undefined}
          />
        </header>
        <div className={styles.tasksContainer}>
          {tasksList.length <= 0 ? (
            <EmptyTasksListMessage />
          ) : (
            tasksList.map((task) => (
              <TaskCardItem
                key={task.id}
                task={task}
                tasksList={tasksList}
                setTasksList={setTasksList}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
};
