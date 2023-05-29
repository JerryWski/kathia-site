import styles from './SectionBoxes.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../utils/ScrollToTop';

const SectionBoxes: React.FC = () => {
  return (
    <section id='boxes' className={styles.boxes_section}>
      <div className={styles.wrapper}>
        <h2 className={styles.boxes_header}>
          Poznajmy <span className={styles.boxes_header__span}>się</span> lepiej
        </h2>
        <span className={styles.header_underline}></span>
        <div className={styles.boxes_container}>
          <div className={styles.box_one}>
            <div className={styles.box_border}></div>
            <img
              className={styles.box_image}
              src={require('../images/coffie.jpg')}
              alt='kitchen-accessories'
            ></img>
            <Link
              className={styles.box_one__link}
              to='/about-me'
              onClick={scrollToTop}
            >
              O Mnie
            </Link>
          </div>
          <div className={styles.box_two}>
            <div className={styles.box_border}></div>
            <img
              className={styles.box_image}
              src={require('../images/dining-room3.jpg')}
              alt='dining-room'
            ></img>
            <Link
              className={styles.box_two__link}
              to='/portfolio'
              onClick={scrollToTop}
            >
              Portfolio
            </Link>
          </div>
          <div className={styles.box_three}>
            <div className={styles.box_border}></div>
            <img
              className={styles.box_image}
              src={require('../images/kitchen.jpg')}
              alt='bedroom'
            ></img>
            <Link
              className={styles.box_three__link}
              to='/insta-stats'
              onClick={scrollToTop}
            >
              Statystyki
            </Link>
          </div>
        </div>
        <div className={styles.text_section}>
          <p className={styles.text_section__bg}>Interior</p>
          <p className={styles.text_about}>
            Zapraszam Cię do świata, w którym pokażę Ci moją pasję oraz
            doświadczenia związane z urządzaniem wnętrza naszego domu.
          </p>
          <p className={styles.text_about}>
            Jeśli chcesz poznać mnie lepiej, koniecznie zajrzyj do sekcji
            <Link
              to='/about-me'
              className={styles.text_span}
              // onClick={scrollToTop}
            >
              {' '}
              O mnie
            </Link>
            . Tam dowiesz się o moich doświadczeniach związanych z
            projektowaniem wnętrz oraz miłości do kawy.
          </p>
          <p className={styles.text_about}>
            W dziale
            <Link
              to='/portfolio'
              className={styles.text_span}
              // onClick={scrollToTop}
            >
              {' '}
              Portfolio{' '}
            </Link>
            prezentuję moje dotychczasowe projekty i realizacje, które z
            pewnością Cię zainspirują.
          </p>
          <p className={styles.text_about}>
            Jeśli interesuje Cię moja działalność oraz chcesz dowiedzieć się
            więcej o usługach, jakie oferuję, zajrzyj do sekcji
            <Link
              className={styles.text_span}
              to='/insta-stats'
              onClick={scrollToTop}
            >
              {' '}
              Statystyki
            </Link>
            . Tam znajdziesz szczegółowe informacje na temat mojej pracy i
            możliwości współpracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBoxes;
