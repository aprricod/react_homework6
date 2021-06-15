import PropTypes from "prop-types";
import React from "react";

const Seasons3 = ({ value }) => {
  return (
    <div>
      <div
        className={
          value === 1
            ? "summer"
            : value === 2
            ? "autumn"
            : value === 3
            ? "winter"
            : "spring"
        }
      >
        {value === 1
          ? "Лето"
          : value === 2
          ? "Осень"
          : value === 3
          ? "Зима"
          : "Весна"}
      </div>
    </div>
  );
};

Seasons3.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Seasons3;
