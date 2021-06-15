import React, { useState } from "react";
import "./App.css";
import Content from "./Content";
import RecursiveButton from "./RecursiveButton";

function App(props) {
  const [showMode, setShowMode] = useState(true);

  const handlerClick = () => {
    setShowMode(!showMode);
  };

  let content = null;

  if (showMode) {
    content = <Content></Content>;
  }

  return (
    <div className="App" onClick={handlerClick}>
      <RecursiveButton />
      <button>Выключение текста</button>
      {content}
    </div>
  );
}

export default App;
