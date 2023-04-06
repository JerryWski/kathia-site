import React from 'react';
import styles from './WelcomSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className={styles.welcome_section}>
        <div className={styles.welcome_header}>
          <h1>@stowidokow.home</h1>
        </div>
        <div className={styles.welcome_image__container}>
          <img
            src={require('../images/kathia.png')} alt='woman'
            className={styles.welcome_image}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
