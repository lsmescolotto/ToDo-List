import Content from "./components/Content";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
