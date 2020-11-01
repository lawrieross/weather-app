import React from 'react';

const AirPressure = (props) => {
  const {
    airPressure
  } = props;

  return (
    <div className="b-highlight__container">
      <span className="b-highlight__heading">
        Air Pressure
      </span>

      <div className="b-highlight__value-container b-highlight__value-container--secondary">
        <span className="b-highlight__value b-highlight__value--secondary">
          {airPressure}
        </span>

        <span className="b-highlight__value-scale">
          mb
        </span>
      </div>
    </div>
  );
}

export default AirPressure;
