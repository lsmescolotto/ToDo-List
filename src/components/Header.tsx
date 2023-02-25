import logo from "../assets/Logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  );
};
