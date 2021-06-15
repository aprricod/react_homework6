import PropTypes from "prop-types";
import React from "react";

const Seasons = ({ value }) => {
  return (
    <div>
      <div className="summer">Лето</div>
    </div>
  );
};

Seasons.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Seasons;
