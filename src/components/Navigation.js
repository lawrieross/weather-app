import React from 'react';
import { ReactComponent as Icon } from './../images/gps_fixed-24px.svg';
import { API_HEADER } from './../App';
import axios from 'axios';

const Navigation = (props) => {
  const {
    setLocation,
    toggleMenuOpen
  } = props;

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = (position) => {
    const search = `search/?lattlong=${position.coords.latitude},${position.coords.longitude}`;
    const request = `${API_HEADER}${search}`;
    axios
      .get(request)
      .then(res => {
        return setLocation(res.data[0].woeid);
      });
  }

  return (
    <nav className="b-nav__container">
      <button
        onClick={() => toggleMenuOpen()}
        className="b-nav__search"
      >
        Search for places
      </button>

      <button
        className="b-nav__location"
        onClick={() => getCurrentLocation()}
      >
        <Icon />
      </button>
    </nav>
  );
}

export default Navigation;