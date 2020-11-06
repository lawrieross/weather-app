import React, { useEffect, useState } from 'react';
import Weekday from './Weekday';
import { WeatherIcons } from './WeatherIcons';
import { Row } from 'react-flexbox-grid';

const WeekdayForecast = (props) => {
  const {
    weatherData
  } = props;

  const [weather, setWeather] = useState('');

  useEffect(() => {
    weatherData().then(data => {
      let weather = data && data;
      setWeather(weather);
    });
  }, [weatherData]);

  const {
    consolidated_weather
  } = weather;

  const consolidatedWeather = consolidated_weather || [];

  const weekdays = consolidatedWeather && consolidatedWeather
    .filter((e, i) => {
      if (i === 0 ) {
        return false;
      } else if (i === 1) {
        e.applicable_date = e.applicable_date && 'Tomorrow';
      }

      return true;
    })
    .map((e, i) => {
      const date = e.applicable_date || '';
      const min = parseInt(e.min_temp) || '';
      const max = parseInt(e.max_temp) || '';
      const weatherState = e.weather_state_name || '';
      let weatherStateIcon = (weatherState && <img src={WeatherIcons(weatherState)} alt="Weather icon" className="b-forecast__img" />) || '';

      return <Weekday
        key={i}
        date={date}
        max={max}
        min={min}
        weatherStateIcon={weatherStateIcon}
      />;
    });

  return (
    <section className="b-weekday__forecast-container">
      <Row center="xs">
        {weekdays && weekdays}
      </Row>
    </section>
  );
}

export default WeekdayForecast;
