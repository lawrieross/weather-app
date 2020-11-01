import React from 'react';

export default function Visibility(props) {
  const {
    visibilityValue
  } = props;

  return (
    <div className="b-highlight__container">
      <span className="b-highlight__heading">
        Visibility
      </span>

      <div className="b-highlight__value-container b-highlight__value-container--secondary">
        <span className="b-highlight__value b-highlight__value--secondary">
          {visibilityValue}
        </span>

        <span className="b-highlight__value-scale">
          miles
        </span>
      </div>
    </div>
  );
}
