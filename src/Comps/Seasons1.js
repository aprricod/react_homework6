import PropTypes from "prop-types";
import React from "react";

const Seasons1 = ({ value }) => {
  //   return (
  //     <div>
  //       <div className="summer">Лето</div>
  //     </div>
  //   );

  if (value === 1) {
    return (
      <div>
        <div className="summer">Лето</div>
      </div>
    );
  } else if (value === 2) {
    return (
      <div>
        <div className="autumn">Осень</div>
      </div>
    );
  } else if (value === 3) {
    return (
      <div>
        <div className="winter">Зима</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="spring">Весна</div>
      </div>
    );
  }
};

Seasons1.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Seasons1;
