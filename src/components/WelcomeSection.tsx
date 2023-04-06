import React from 'react';
import styles from './WelcomSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className={styles.welcome_section}>
        <div className={styles.welcome_header}>
          <p>#interior, #home, #passion</p>
          <h1>@stowidokow.home</h1>
        </div>
        <div className={styles.welcome_image__container}>
        <picture>
        <source srcSet={require('../images/stowidokow3-logo-half.png')} media="(max-width: 727px)" />
        <img
          src={require('../images/stowidokow3-logo.png')}
          alt="Logo Stowidoków"
          className={styles.welcome_image}
        />
      </picture>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
