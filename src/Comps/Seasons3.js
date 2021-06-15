import PropTypes from "prop-types";
import React from "react";

const Seasons3 = ({ value }) => {
  return value === 1 ? (
    <div>
      <div className="summer">Лето</div>
    </div>
  ) : value === 2 ? (
    <div>
      <div className="autumn">Осень</div>
    </div>
  ) : value === 3 ? (
    <div>
      <div className="winter">Зима</div>
    </div>
  ) : (
    <div>
      <div className="spring">Весна</div>
    </div>
  );
};

Seasons3.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Seasons3;
