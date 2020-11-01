import React, { Component } from 'react';
import Forecast from './Forecast';
import Menu from './Menu';
import Navigation from './Navigation';

export default class Header extends Component {
  render() {
    const {
      menuOpen,
      setLocation,
      weatherData,
      toggleMenuOpen
    } = this.props;

    return (
      <header className="b-header">
        <Navigation
          setLocation={setLocation}
          toggleMenuOpen={toggleMenuOpen}
        />

        <Menu
          menuOpen={menuOpen}
          setLocation={setLocation}
          toggleMenuOpen={toggleMenuOpen}
        />

        <Forecast weatherData={weatherData} />
      </header>
    );
  }
}
