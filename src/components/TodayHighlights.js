import React, { useEffect, useState } from 'react';
import AirPressure from './AirPressure';
import Humidity from './Humidity';
import Visibility from './Visibility';
import Wind from './Wind';
import { Row, Col } from 'react-flexbox-grid';

const TodayHighlights = (props) => {
  const {
    weatherData
  } = props;

  const [today, setToday] = useState('');

  useEffect(() => {
    weatherData().then(data => {
      let weather = data && data;
      let today = weather && weather.consolidated_weather && weather.consolidated_weather[0];
      setToday(today);
    });
  }, [weatherData]);

  const {
    air_pressure,
    humidity,
    visibility,
    wind_direction,
    wind_speed,
    wind_direction_compass
  } = today;

  const airPressure = (air_pressure && parseInt(air_pressure)) || '';
  const humidityValue = (humidity && parseInt(humidity)) || '';
  const visibilityValue = (visibility && parseInt(visibility).toFixed(1)) || '';
  const windAngle = (wind_direction && (parseInt(wind_direction) - 180)) || 0;
  const windSpeed = (wind_speed && parseInt(wind_speed)) || '';
  const windDirection = (wind_direction_compass && wind_direction_compass) || '';

  return (
    <section className="b-today-highlights__container">
      <h3 className="b-today-highlights__heading">
        Today's Highlights
      </h3>

      <Row>
        <Col xs={12} md={6}>
          <Wind
            windAngle={windAngle}
            windSpeed={windSpeed}
            windDirection={windDirection}
          />
        </Col>

        <Col xs={12} md={6}>
          <Humidity humidityValue={humidityValue} />
        </Col>

        <Col xs={12} md={6}>
          <Visibility visibilityValue={visibilityValue} />
        </Col>

        <Col xs={12} md={6}>
          <AirPressure airPressure={airPressure} />
        </Col>
      </Row>
    </section>
  );
}

export default TodayHighlights;
