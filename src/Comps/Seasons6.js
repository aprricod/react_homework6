import PropTypes from "prop-types";
import { Fragment } from "react";
import React from "react";

const Seasons6 = ({ value }) => {
  return (
    <div>
      {value === 1 && (
        <Fragment>
          <div className="summer">Лето</div>
        </Fragment>
      )}
      {value === 2 && (
        <Fragment>
          <div className="autumn">Осень</div>
        </Fragment>
      )}
      {value === 3 && (
        <Fragment>
          <div className="winter">Зима</div>
        </Fragment>
      )}
      {value === 4 && (
        <Fragment>
          <div className="spring">Весна</div>
        </Fragment>
      )}
    </div>
  );
};

Seasons6.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Seasons6;
