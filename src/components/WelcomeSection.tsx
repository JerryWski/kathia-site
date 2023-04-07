import React from 'react';
import styles from './WelcomSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className={styles.welcome_section}>
        <div className={styles.welcome_header__container}>
          <p className={styles.welcome_text__top}>#interior, #home, #design</p>
          <h1 className={styles.welcome_header}>
            Let&apos;s <span className={styles.header_italic}> Make</span> Your
            Interior <span className={styles.header_italic}>Better</span>
          </h1>
        </div>
        <div className={styles.welcome_image__container}>
          <picture>
            <source
              srcSet={require('../images/stowidokow3-logo-half.png')}
              media='(max-width: 1344px)'
            />
            <img
              src={require('../images/stowidokow3-logo.png')}
              alt='Logo Stowidoków'
              className={styles.welcome_image}
            />
          </picture>
          {/* <img
            src={require('../images/insta-image.png')}
            alt='Logo Stowidoków'
            className={styles.test}
          /> */}
        </div>
        <p className={styles.welcome_text__bottom}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa
        </p>
        <a className={styles.link_arrow} href=''>
          <i className='fa-solid fa-chevron-down fa-2x'></i>
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
