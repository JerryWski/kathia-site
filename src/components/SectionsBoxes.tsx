import styles from './SectionBoxes.module.css';

const SectionBoxes: React.FC = () => {
  return (
    <section className={styles.boxes_section}>
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
              src={require('../images/coffie.png')}
              alt='kitchen-accessories'
            ></img>
            <a className={styles.box_one__link} href=''>
              O Mnie
            </a>
          </div>
          <div className={styles.box_two}>
            <div className={styles.box_border}></div>
            <img
              className={styles.box_image}
              src={require('../images/coffie.png')}
              alt='kitchen-accessories'
            ></img>
            <a className={styles.box_two__link} href=''>
              Portfolio
            </a>
          </div>
          <div className={styles.box_three}>
            <div className={styles.box_border}></div>
            <img
              className={styles.box_image}
              src={require('../images/co-op.png')}
            ></img>
            <a className={styles.box_three__link} href=''>
              Działalność
            </a>
          </div>
        </div>
        <div className={styles.text_section}>
          <p className={styles.text_section__bg}>Interior</p>
          <p className={styles.text_about}>
            Zapraszam Cię do świata, w którym pokażę Ci moją pasję oraz
            doświadczenia związane z projektowaniem wnętrza naszego domu.
          </p>
          <p className={styles.text_about}>
            Jeśli chcesz poznać mnie lepiej, koniecznie zajrzyj do sekcji
            <span className={styles.text_span}> O mnie</span>. Tam dowiesz się o
            moich doświadczeniach związanych z projektowaniem wnętrz oraz miłości
            do kawy.
          </p>
          <p className={styles.text_about}>
            W dziale<span className={styles.text_span}> Portfolio</span>{' '}
            prezentuję moje dotychczasowe projekty i realizacje, które z pewnością
            Cię zainspirują.
          </p>
          <p className={styles.text_about}>
            Jeśli interesuje Cię moja działalność oraz chcesz dowiedzieć się
            więcej o usługach, jakie oferuję, zajrzyj do sekcji
            <span className={styles.text_span}> Działalność</span>. Tam znajdziesz
            szczegółowe informacje na temat mojej pracy i możliwości współpracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBoxes;
