import React from 'react';
import { days, months } from './Date';

const Weekday = (props) => {
  const {
    date,
    max,
    min,
    weatherStateIcon
  } = props;

  let weekdayDate = date;

  if (date !== 'Tomorrow') {
    weekdayDate = date && new Date(date);
    const dayNumber = weekdayDate && weekdayDate.getDay();
    const day = days[dayNumber];
    const month = weekdayDate && months[weekdayDate.getMonth()];
    weekdayDate = (weekdayDate && `${day}, ${weekdayDate.getDate()} ${month}`) || '';
  }

  return (
    <div className="b-weekday__container">
      <span className="b-weekday__day">
        {weekdayDate && weekdayDate}
      </span>

      <div className="b-weekday__icon-container">
        {weatherStateIcon}
      </div>

      <div className="b-weekday__min-max-container">
        <div className="b-weekday__max-container">
          <span className="b-weekday__max">
            {max}
          </span>

          <span className="b-weekday__max-scale">
            &#8451;
          </span>
        </div>

        <div className="b-weekday__min-container">
          <span className="b-weekday__min">
            {min}
          </span>

          <span className="b-weekday__min-scale">
            &#8451;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Weekday;
