import React from 'react';
import { ReactComponent as Icon } from './../images/navigation-black-18dp.svg';

const Wind = (props) => {
  const {
    windAngle,
    windSpeed,
    windDirection
  } = props;

  const windStyles = {
    transform: `rotate(${windAngle}deg)`
  }

  return (
    <div className="b-highlight__container">
      <span className="b-highlight__heading">Wind Status</span>

      <div className="b-highlight__value-container">
        <span className="b-highlight__value">
          {windSpeed}
        </span>
        <span className="b-highlight__value-scale">
          mph
        </span>
      </div>

      <div className="b-highlight__wind-container">
        <div className="b-highlight__wind-pointer">
          <Icon style={windStyles} />
        </div>

        <span className="b-highlight__wind-direction">
          {windDirection}
        </span>
      </div>
    </div>
  );
}

export default Wind;
