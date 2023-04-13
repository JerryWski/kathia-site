import styles from './SectionBoxes.module.css';

const SectionBoxes: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.boxes_header}>Poznajmy się lepiej</h2>
      <span className={styles.header_underline}></span>
      <div className={styles.boxes_container}>
        <div className={styles.box_one}>
          <div className={styles.box_border}></div>
          <img
            className={styles.box_image}
            src={require('../images/coffie.png')} alt='kitchen-accessories'
          ></img>
          <a className={styles.box_one__link} href=''>
            O Mnie
          </a>
        </div>
        <div className={styles.box_two}>
          <div className={styles.box_border}></div>
          <img
            className={styles.box_image}
            src={require('../images/coffie.png')} alt='kitchen-accessories'
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
    </div>
  );
};

export default SectionBoxes;
