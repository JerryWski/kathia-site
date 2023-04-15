import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contact_section}>
      <div className={styles.wrapper}>
        <h2 className={styles.contact_header}>Kontakt</h2>
        <p className={styles.contact_text}>Znajdź Mnie i napisz!</p>
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
        <img className={styles.contact_logo} src={require('../images/stowidokow4-logo.png')}></img>
      </div>
    </section>
  );
};

export default ContactSection;
