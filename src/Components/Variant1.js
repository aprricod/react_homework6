import React from "react";

const ValidationMsg = ({ val }) => {
  if (val >= 10) {
    return <h2>Greater than 10</h2>;
  } else {
    return <h2>Less than 10</h2>;
  }
};

const Variant1 = () => {
  return (
    <div>
      <ValidationMsg val={10} />
    </div>
  );
};

export default Variant1;
