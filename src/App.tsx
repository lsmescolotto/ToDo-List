import { useState } from "react";
import Content from "./components/Content";
import { Header } from "./components/Header";
import "./global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
