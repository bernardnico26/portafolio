import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemeItem from './ThemeItem';
import "../styles/themes.css"

const getStorageColor = () => {
  let color = 'hsl(252, 35%, 51%)';
  if (localStorage.getItem('color')) {
    color = localStorage.getItem('color');
  }

  return color;
};

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (hexColor) => {
    setColor(hexColor);
    document.documentElement.style.setProperty('--first-color', hexColor);
    localStorage.setItem('color', hexColor);
  };

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section>
      <div className='style__switcher'>
        <div className='color__settings_container '>
          <div className='style__switcher-toggler colors'
              onClick={() => setShowSwitcher(!showSwitcher)}><i className="fa-solid fa-gear"></i>
          </div>
          <div className={`${showSwitcher ? 'show-switcher' : ''} color_settings`}>
            <h3 className='style__switcher-title'>Style Switcher</h3>
            <div className='input__color'>
              <div className='label__section'>
                <label htmlFor="color" className='label__color'>cambia el color que tu quieras</label>
                <span className='arrow__input'><i className='bx bx-chevron-down'></i></span>
              </div>
              <input
                type="color"
                value={color}
                onChange={(e) => changeColor(e.target.value)}
                className='color__input'
                id='color'
              />
            </div>
            
            <div className='style__switcher-items'>
              {themes.map((theme, index) => {
                return (
                  <ThemeItem key={index} {...theme} changeColor={changeColor} />
                );
              })}
            </div>

            <div
              className='style__switcher-close'
              onClick={() => setShowSwitcher(!showSwitcher)}
            >
              &times;
            </div>
          </div>
        </div>

        <div className='theme__toggler colors' onClick={toggleTheme}>
          {theme === 'light-theme' ? <span><i className="fa-regular fa-moon"></i></span> : <span><i className="fa-regular fa-sun"></i></span>}
        </div>

        
      </div>
    </section>
  );
};

export default Themes;
