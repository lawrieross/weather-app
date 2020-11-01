import Clear from './../images/Clear.png';
import Hail from './../images/Hail.png';
import HeavyCloud from './../images/HeavyCloud.png';
import HeavyRain from './../images/HeavyRain.png';
import LightCloud from './../images/LightCloud.png';
import LightRain from './../images/LightRain.png';
import Showers from './../images/Shower.png';
import Sleet from './../images/Sleet.png';
import Snow from './../images/Snow.png';
import Thunderstorm from './../images/Thunderstorm.png';

export const WeatherIcons = (state) => {
  return {
    'Clear': Clear,
    'Hail': Hail,
    'Heavy Cloud': HeavyCloud,
    'Heavy Rain': HeavyRain,
    'Light Cloud': LightCloud,
    'Light Rain': LightRain,
    'Showers': Showers,
    'Sleet': Sleet,
    'Snow': Snow,
    'Thunderstorm': Thunderstorm
  }[state];
}
