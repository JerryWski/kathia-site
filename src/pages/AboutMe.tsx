import styles from './AboutMe.module.css';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import scrollToTop from '../utils/ScrollToTop';

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
            src={require('../images/kathia3.png')}
            alt='woman'
          ></img>
        </div>
        {/* <span className={styles.test}>Śledź</span> */}
        <div className={styles.description_container}>
          <p className={styles.bio_descritpion}>Cześć!</p>
          <p className={styles.bio_descritpion}>
            Jestem Kasia. Prowadzę konto na Instagramie o nazwie{' '}
            <a
              className={styles.bio_link}
              href='https://www.instagram.com/stowidokow.home/'
            >
              @stowidokow.home
            </a>
            . Jestem miłośniczką kawy i przytulnych wnętrz. Choć w życiu
            zawodowym zajmuję się głównie rekrutacją, sprzedażą i szkoleniami,
            to pasja do wnętrz i fotografii sprawiła, że prowadzenie tego
            profilu sprawia mi najwięcej radości.
          </p>
          <p className={styles.bio_descritpion}>
            Uczestniczyłam w licznych szkoleniach z social mediów, nadzorowałam
            od strony marketingowej pracę dwóch sklepów internetowych, dzięki
            czemu nabyłam kompetencje z zakresu influencer marketingu.
            Udzielałam na swoim koncie porad poszerzających wiedzę o Instagramie
            i z zakresu rozwijania profilu wnętrzarskiego, czego owocem jest
            wydany w 2021 r.{' '}
            <a
              className={styles.bio_link}
              href='https://www.instagram.com/stowidokow.home/'
            >
              {' '}
              e-book
            </a>{' '}
          </p>
          <p className={styles.bio_descritpion}>
            Obecnie obserwuje mnie 117 tys. osób na Instagramie, a dzięki
            połączeniu znajomości e- commerce z zaangażowaniem mojej
            społeczności, udaje mi się uzyskiwać całkiem dobre{' '}
            <Link
              className={styles.bio_link}
              to='/insta-stats'
              onClick={scrollToTop}
            >
              {' '}
              Statystyki
            </Link>
            . Przy prezentacji zarówno wnętrz swojego domu, jak i reklamowanych
            produktów zawsze liczy się dla mnie estetyczna forma oraz jakość.
          </p>
          <p className={styles.bio_descritpion}>
            Jeśli jesteś zainteresowany reklamą na tej stronie lub na moich
            kanałach SM, wyślij wiadomość na adres:{' '}
            <a
              className={styles.bio_link}
              href='mailto:stowidokow.home@gmail.com'
            >
              stowidokowhome@gmail.com
            </a>
          </p>
        </div>
      </div>
      <ContactSection />
    </section>
  );
};

export default AboutMe;
