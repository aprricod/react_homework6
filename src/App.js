import React from "react";
import "./App.css";
import Seasons1 from "./Comps/Seasons1";
import Seasons2 from "./Comps/Seasons2";
import Seasons3 from "./Comps/Seasons3";
import Seasons4 from "./Comps/Seasons4";
import Seasons5 from "./Comps/Seasons5";
import Seasons6 from "./Comps/Seasons6";

function App() {
  return (
    <div className="App">
      <p>конструкция "if else"</p>
      <Seasons1 value={1}></Seasons1>
      <hr />
      <p>конструкция "switch case"</p>
      <Seasons2 value={2}></Seasons2>
      <hr />
      <p>"тернарный оператор" для блока разметки</p>
      <Seasons3 value={3}></Seasons3>
      <hr />
      <p>"тернарный оператор" JS код внутри разметки</p>
      <Seasons4 value={4}></Seasons4>
      <hr />
      <p>"тернарный оператор" для CSS класса и текста между тегами</p>
      <Seasons5 value={1}></Seasons5>
      <hr />
      <p>конструкция "двойной &&"</p>
      <Seasons6 value={2}></Seasons6>
    </div>
  );
}

export default App;
