import React from 'react';
import { ReactComponent as CloseButton } from './../images/close-black-18dp.svg';
import { ReactComponent as SearchIcon } from './../images/search-black-18dp.svg';
import { ReactComponent as Chevron } from './../images/chevron_right-black-18dp.svg';
import { locations } from './Locations';

const Menu = (props) => {
  const {
    menuOpen,
    setLocation,
    toggleMenuOpen
  } = props;

  const isOpen = menuOpen ? ' is-open' : '';

  const defaultLocations = locations.map((e, i) => {
    return (
      <button
        key={i}
        onClick={() => {
          setLocation(e.woeid)
          toggleMenuOpen(menuOpen)
        }}
        className="b-menu__location"
      >
        {e.title}

        <div className="b-menu__location-chevron">
          <Chevron />
        </div>
      </button>
    )
  });

  return (
    <section className={`b-menu__container${isOpen}`}>
      <div className="b-menu">
        <button
          onClick={() => toggleMenuOpen(menuOpen)}
          className="b-menu__close"
        >
          <CloseButton />
        </button>

        <div className="b-menu__search-container">
          <div className="b-menu__search-input-container">
            <SearchIcon />

            <input
              type="text"
              className="b-menu__search-input"
              placeholder="search location"
            />
          </div>

          <button className="b-menu__search-button">
            Search
          </button>
        </div>

        <div className="b-menu__location-container">
          {defaultLocations && defaultLocations}
        </div>
      </div>
    </section>
  );
}

export default Menu;
