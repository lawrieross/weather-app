import React, { Component } from 'react'
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import WeekdayForecast from './components/WeekdayForecast';
import TodayHighlights from './components/TodayHighlights';
import './scss/App.scss';

export const API_HEADER = 'https://www.metaweather.com/api/location/';

class App extends Component {
  state = {
    location: '',
    menuOpen: false
  };

  componentDidMount = () => {
    this.setState({
      menuOpen: false,
      location: '1105779'
    });
  }

  toggleMenuOpen = () => {
    let { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  setLocation = (location) => {
    this.setState({ location: location });
  }

  render() {
    const {
      location,
      menuOpen
    } = this.state;

    if (menuOpen) {
      document.body.classList.add('is-nav-open');
    } else {
      document.body.classList.remove('is-nav-open');
    }

    const endpoint = location ? `${API_HEADER}${location}` : `${API_HEADER}/1105779`;

    const getData = async () => await axios
      .get(endpoint)
      .then(res => res.data);

    return (
      <div className="b-weather">
        <Header
          menuOpen={menuOpen}
          setLocation={this.setLocation}
          toggleMenuOpen={this.toggleMenuOpen}
          weatherData={getData}
        />

        <main className="b-main">
          <WeekdayForecast weatherData={getData} />
          <TodayHighlights weatherData={getData} />
          <Footer />
        </main>
      </div>
    )
  }
}

export default App;
