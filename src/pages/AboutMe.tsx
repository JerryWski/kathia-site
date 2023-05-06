import styles from './AboutMe.module.css';
import ContactSection from '../components/ContactSection';

const AboutMe: React.FC = () => {
  return (
    <section id='about-me' className={styles.about_section}>
      <div className={styles.about_wrapper}>
        <div className={styles.intro_container}>
          <h2 className={styles.intro_heading}>O Mnie</h2>
        </div>
        <div className={styles.image_container}>
          <img
            className={styles.profile_image}
            src={require('../images/kathia2.png')}
            alt='woman'
          ></img>
        </div>
        {/* <span className={styles.test}>Śledź</span> */}
        <div className={styles.description_container}>
          <p className={styles.bio_descritpion}>Cześć!</p>
          <p className={styles.bio_descritpion}>
            Jestem Kasia. Prowadzę konto na Instagramie o nazwie
            <a
              className={styles.bio_link}
              href='https://www.instagram.com/stowidokow.home/'
            >
            @stowidokow.home
            </a>
            . Miłośniczka kawy i przytulnych wnętrz. Choć w życiu zawodowym
            zajmowała się głównie rekrutacją, sprzedażą i szkoleniami, to pasja
            do wnętrz i fotografii sprawiła, że prowadzenie tego profilu sprawia
            jej najwięcej radości.
          </p>
          <p className={styles.bio_descritpion}>
            Uczestniczyła w szkoleniach z social mediów, nadzorowała od strony
            marketingowej pracę dwóch sklepów internetowych, dzięki czemu nabyła
            kompetencje z zakresu influencer marketingu. Udziela na swoim koncie
            porad poszerzających wiedzę o Instagramie i z zakresu rozwijania
            profilu wnętrzarskiego.
          </p>
          <p className={styles.bio_descritpion}>
            Jej marzeniem od zawsze było napisać własną książkę, póki co wydała
            <a className={styles.bio_link} href=''>
              {' '}
              e-booka
            </a>{' '}
            i ma apetyt na więcej!
          </p>
        </div>
      </div>
      <ContactSection/>
    </section>
  );
};

export default AboutMe;
