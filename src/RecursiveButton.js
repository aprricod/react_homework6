import React, { useState, Fragment } from "react";

export default function RecursiveButton(props) {
  const [showMode, setShowMode] = useState(false);
  return (
    <>
      <button onClick={() => setShowMode(!showMode)}>
        Покажи/скрой следующий шаг
      </button>
      <br />
      {showMode ? <RecursiveButton /> : null}
    </>
  );
}
