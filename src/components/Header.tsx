import logo from "../assets/Logo.png";
import styles from "./Header.module.css";
import { PlusCircle } from "phosphor-react";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Task } from "../App";
import { v4 as uuid } from "uuid";

interface HeaderProps {
  setTasksList: Dispatch<SetStateAction<Task[]>>;
}

export const Header = (props: HeaderProps) => {
  const { setTasksList } = props;

  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const addNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasksList((state) => [
      ...state,
      { name: newTaskValue, id: uuid(), completed: false },
    ]);
    setNewTaskValue("");
  };

  const handleChangeTaskValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo logo" />
      <form className={styles.createTaskForm} onSubmit={addNewTask}>
        <input
          value={newTaskValue}
          onChange={handleChangeTaskValue}
          placeholder="Create a new task"
        />
        <button type="submit" disabled={newTaskValue.length <= 0}>
          Add <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};
