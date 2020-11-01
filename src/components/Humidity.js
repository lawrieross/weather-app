import React from 'react';

const Humidity = (props) => {
  const {
    humidityValue
  } = props;

  const humidityStyle = {
    width: `${humidityValue}%`
  }

  return (
    <div className="b-highlight__container">
      <span className="b-highlight__heading">
        Humidiy
      </span>

      <div className="b-highlight__value-container">
        <span className="b-highlight__value">
          {humidityValue}
        </span>

        <span className="b-highlight__value-scale">
          %
        </span>
      </div>

      <div className="b-highlight__humidity-container">
        <div className="b-highlight__humidity-number-container">
          <span className="b-highlight__humidity-number b-highlight__humidity-number--1">
            0
          </span>
          <span className=" b-highlight__humidity-number b-highlight__humidity-number--2">
            50
          </span>
          <span className="b-highlight__humidity-number b-highlight__humidity-number--3">
            100
          </span>
        </div>

        <div className="b-highlight__scale-container">
          <div
            className="b-highlight__scale"
            style={humidityStyle}
          >
          </div>
        </div>

        <span className="b-highlight__humidity-number b-highlight__humidity-number--percentage">
          %
        </span>
      </div>
    </div>
  )
}

export default Humidity;
