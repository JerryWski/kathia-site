import styles from './ContactSection.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../utils/ScrollToTop';
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contact_section} id='contacts'>
      <div className={styles.wrapper}>
        <h2 className={styles.contact_header}>Kontakt</h2>
        <p className={styles.contact_text}>Znajdź mnie i napisz!</p>
        <div className={styles.social_icons}>
          <a
            href='https://www.instagram.com/stowidokow.home/'
            className={styles.icon_link}
            aria-label='Link to Instagram'
          >
            <i className='fa-brands fa-instagram fa-2x'></i>
          </a>
          <a
            href='mailto:stowidokow.home@gmail.com'
            className={styles.icon_link}
            aria-label='Link to mail'
          >
            <i className='fa-regular fa-envelope fa-2x'></i>
          </a>
          <a
            href='tel:+48531767911'
            className={styles.icon_link}
            aria-label='Link to phone'
          >
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
        <Link
          className={styles.shortcuts_links}
          to='/portfolio'
          onClick={scrollToTop}
        >
          Portfolio
        </Link>
        <Link
          className={styles.shortcuts_links}
          to='/insta-stats'
          onClick={scrollToTop}
        >
          Statystyki
        </Link>
        <Link
          className={styles.shortcuts_links}
          to='/private-policy'
          aria-label='Link to policy'
          onClick={scrollToTop}
        >
          Polityka prywatności
        </Link>
      </div>
      <a className={styles.contact_logo__link} href='#home'>
        <img
          className={styles.contact_logo}
          src={require('../images/stowidokow4-logo.png')}
          alt='logo-image'
        ></img>
      </a>
    </section>
  );
};

export default ContactSection;
