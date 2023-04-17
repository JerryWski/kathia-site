/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import styles from './NavigationBar.module.css';
import { Link } from 'react-router-dom';

interface NavigationBarProps {
  toggleOverLay: () => void
}

interface NavItemsProps {
  to: string
  label: string
}

const NavItem: React.FC<NavItemsProps> = ({ to, label }) => {
  return (
    <li className={styles.nav_bar__list_item}>
      <Link className={styles.links} to={to}>
        {label}
      </Link>
    </li>
  );
};

const NavigationBar: React.FC<NavigationBarProps> = ({ toggleOverLay }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive: () => void = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className={styles.nav_bar}>
        <div id='home' className={styles.logo_container}>
          <img
            className={styles.logo_container__image}
            src={require('../images/logo-five.png')}
            alt='logo'
          />
        </div>
        <ul
          className={`${styles.nav_bar__list} ${isActive ? styles.active : ''}`}
        >
          <NavItem to='/about-me' label='O mnie' />
          {/* <NavItem href='/' label='Portfolio' />
          <NavItem href='/' label='Działalność' />
          <NavItem href='/' label='Kontakt' /> */}
        </ul>
        <ul className={styles.nav_bar__social}>
          <li className={styles.nav_bar__social_item}>
            <a
              href='https://www.instagram.com/stowidokow.home/'
              className={styles.icons}
            >
              <i className='fa-brands fa-instagram fa-2x'></i>
            </a>
          </li>
          <li className={styles.nav_bar__social_item}>
            <a href='mailto:stowidokow.home@gmail.com' className={styles.icons}>
              <i className='fa-regular fa-envelope fa-2x'></i>
            </a>
          </li>
        </ul>
        <HamburgerButton
          isActive={isActive}
          toggleActive={toggleActive}
          toggleOverlay={toggleOverLay}
        />
        <span className={styles.navbar_underline}></span>
      </nav>
    </>
  );
};

export default NavigationBar;
