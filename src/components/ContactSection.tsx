import styles from './ContactSection.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useLayoutEffect } from 'react';

const ContactSection: React.FC = () => {
  const scrollToTop = (): void => {
    const scrollStep = -window.scrollY / (100 / 55);
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, scrollStep);
      if (window.scrollY === 0) clearInterval(scrollInterval);
    }, 15);
  };

  return (
    <section className={styles.contact_section} id='contacts'>
      <div className={styles.wrapper}>
        <h2 className={styles.contact_header}>Kontakt</h2>
        <p className={styles.contact_text}>Znajdź mnie i napisz!</p>
        <div className={styles.social_icons}>
          <a
            href='https://www.instagram.com/stowidokow.home/'
            className={styles.icon_link}
          >
            <i className='fa-brands fa-instagram fa-2x'></i>
          </a>
          <a
            href='mailto:stowidokow.home@gmail.com'
            className={styles.icon_link}
          >
            <i className='fa-regular fa-envelope fa-2x'></i>
          </a>
          <a href='tel:+48531767911' className={styles.icon_link}>
            <i className='fa-solid fa-mobile-screen-button fa-2x'></i>
          </a>
        </div>
      </div>
      <div className={styles.shortcuts}>
        <h3>Na skróty:</h3>
        <Link
          className={styles.shortcuts_links}
          to='/about-me'
          onClick={scrollToTop}
        >
          O mnie
        </Link>
        <a className={styles.shortcuts_links} href=''>
          Portfolio
        </a>
        <a className={styles.shortcuts_links} href=''>
          Działalność
        </a>
        <a className={styles.shortcuts_links} href=''>
          Polityka prywatności
        </a>
      </div>
      <a className={styles.contact_logo__link} href='#home'>
        <img
          className={styles.contact_logo}
          src={require('../images/stowidokow4-logo.png')}
        ></img>
      </a>
    </section>
  );
};

export default ContactSection;
