import React from "react";

const Variant2 = () => {
  const val = 10;
  return (
    <div>
      {/* тернарный оператор */}
      {val >= 10 ? <h2>Greater than 10</h2> : <h2>Less than 10</h2>}
      {/* двойной && */}
      {val && <span>Val present</span>}
    </div>
  );
};

export default Variant2;
