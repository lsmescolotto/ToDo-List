import { Content } from "./components/Content";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export const App = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  return (
    <div className={styles.appContainer}>
      <Header setTasksList={setTasksList} />
      <Content tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
};
