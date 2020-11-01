import React, { useEffect, useState } from 'react';
import { ReactComponent as LocationIcon } from './../images/location_on-black-18dp.svg';
import { days, months } from './Date';
import { WeatherIcons } from './WeatherIcons';

const Forecast = (props) => {
  const {
    weatherData
  } = props;

  const [weather, setWeather] = useState('');
  const [today, setToday] = useState('');

  useEffect(() => {
    weatherData().then(data => {
      let weather = data && data;
      let today = weather && weather.consolidated_weather && weather.consolidated_weather[0];
      setWeather(weather);
      setToday(today);
    });
  }, [weatherData]);

  const {
    title
  } = weather;

  const {
    applicable_date,
    the_temp,
    weather_state_name
  } = today;

  const date = new Date(applicable_date);
  const dayNumber = date.getDay();
  const day = days[dayNumber];
  const month = months[date.getMonth()];
  let temparature = (the_temp && parseInt(the_temp)) || '';
  let weatherState = weather_state_name || '';
  let weatherStateIcon = (weatherState && <img src={WeatherIcons(weatherState)} alt="Weather icon" className="b-forecast__img" />) || '';

  const dateString = (day && month && `${day}, ${date.getDate()} ${month}`) || '';

  return (
    <div className="b-forecast__container">
      <div className="b-forecast__img-container">
        {weatherStateIcon}
      </div>

      <div className="b-forecast__temp-container">
        <h1 className="b-forecast__temp">
          {temparature}
        </h1>

        <span className="b-forecast__temp-scale">
          &#8451;
        </span>
      </div>

      <h3 className="b-forecast__conditions">
        {weatherState}
      </h3>

      <div className="b-forecast__date-container">
        <span className="b-forecast__date b-forecast__date--day">
          Today
        </span>

        <span className="b-forecast__date">
          {dateString}
        </span>
      </div>

      <div className="b-forecast__location-container">
        <div className="b-forecast__location-icon">
          <LocationIcon />
        </div>

        <span className="b-forecast__location">
          {title}
        </span>
      </div>
    </div>
  );
}

export default Forecast;
