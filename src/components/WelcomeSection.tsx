import React from 'react';
import styles from './WelcomSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className={styles.welcome_section}>
        <div className={styles.welcome_header__container}>
          <p className={styles.welcome_text__top}>wnętrza, dom, design</p>
          <h1 className={styles.welcome_header}>Marka Własna</h1>
        </div>
        <div className={styles.welcome_image__container}>

          <div className={styles.slider_wrapper}>
            <picture>
              <source
                srcSet={require('../images/stowidokow-logo-half.png')}
                media='(max-width: 1339px)'
              />
              <img
                src={require('../images/stowidokow-logo.png')}
                alt='brand-logo'
                className={styles.welcome_image}
              />
            </picture>
          </div>
          <div className={styles.slider_wrapper}>
            <img
              src={require('../images/insta-image.jpg')}
              alt='interior-house'
              className={styles.welcome_image}
            />
          </div>
          <div className={styles.slider_wrapper}>
            <img
              src={require('../images/baby-room.jpg')}
              alt='baby-room'
              className={styles.welcome_image}
            />
          </div>
          <div className={styles.slider_wrapper}>
            <img
              src={require('../images/bathroom.jpg')}
              alt='bathroom'
              className={styles.welcome_image}
            />
          </div>
          <div className={styles.slider_wrapper}>
            <img
              src={require('../images/bedroom2.jpg')}
              alt='bedroom'
              className={styles.welcome_image}
            />
          </div>

        </div>

        <p className={styles.welcome_text__bottom}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa
        </p>
        <a
          className={styles.link_arrow}
          href='#home'
          aria-label='arrow link to scroll down'
        >
          <i className='fa-solid fa-chevron-down fa-2x'></i>
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
