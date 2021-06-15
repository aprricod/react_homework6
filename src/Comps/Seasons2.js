import PropTypes from "prop-types";
import React from "react";

const Seasons2 = ({ value }) => {
  switch (value) {
    case 1:
      return (
        <div>
          <div className="summer">Лето</div>
        </div>
      );
    case 2:
      return (
        <div>
          <div className="autumn">Осень</div>
        </div>
      );
    case 3:
      return (
        <div>
          <div className="winter">Зима</div>
        </div>
      );
    default:
      return (
        <div>
          <div className="spring">Весна</div>
        </div>
      );
  }
};

Seasons2.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Seasons2;
