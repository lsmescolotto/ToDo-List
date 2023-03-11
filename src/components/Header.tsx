import logo from "../assets/Logo.png";
import styles from "./Header.module.css";
import { PlusCircle } from "phosphor-react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo logo" />
      <form className={styles.createTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={16} />{" "}
        </button>
      </form>
    </header>
  );
};
