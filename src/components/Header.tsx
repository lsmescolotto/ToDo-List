import logo from "../assets/Logo.png";
import styles from "./Header.module.css";
import { PlusCircle } from "phosphor-react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo logo" />
      <form className={styles.createTaskForm}>
        <input placeholder="Create a new task" />
        <button type="submit">
          Add <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};
