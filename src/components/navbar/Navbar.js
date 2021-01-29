import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import cx from 'classnames';

import styles from './Navbar.module.css';
const Navbar = () => {
  const [click, SetClicked] = useState(false);
  const {
    nav,
    logo,
    nav_list,
    nav_item,
    nav_link,
    active,
    navIcon,
    closeIcon,
  } = styles;
  return (
    <nav>
      <div className='container'>
        <div className={nav}>
          <h3 className={logo}>Travel Blog </h3>

          <div
            className={click ? cx(navIcon, active) : navIcon}
            onClick={() => {
              console.log(click);
              SetClicked(!click);
            }}
          >
            <FaBars className='icon ion-md-menu' />
          </div>

          <ul className={click ? cx(nav_list, active) : nav_list}>
            <li className={cx(navIcon, closeIcon)}>
              <FaTimes
                className='icon ion-md-close'
                onClick={() => SetClicked(!click)}
              />
            </li>
            <li className={nav_item}>
              <a
                href='/'
                className={cx(nav_link, active)}
                onClick={() => SetClicked(false)}
              >
                Home
              </a>
            </li>
            <li className={nav_item}>
              <a
                href='/projects'
                className={nav_link}
                onClick={() => SetClicked(false)}
              >
                best places
              </a>
            </li>
            <li className={nav_item}>
              <a
                href='/about'
                className={nav_link}
                onClick={() => SetClicked(false)}
              >
                Destinations
              </a>
            </li>
            <li className={nav_item}>
              <a
                href='/contact'
                className={nav_link}
                onClick={() => SetClicked(false)}
              >
                travel tips
              </a>
            </li>
            <li className={nav_item}>
              <a
                href='/contact'
                className={nav_link}
                onClick={() => SetClicked(false)}
              >
                travel ressources
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
