import styles from './SectionBoxes.module.css';

const SectionBoxes: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.boxes_header}>Poznajmy się lepiej</h2>
        <span className={styles.header_underline}></span>
      <div className={styles.boxes_container}>
        <div className={styles.box_one}>
          <a className={styles.box_one__link} href=''>O mnie</a>
        </div>
        <div className={styles.box_two}>
          <a className={styles.box_two__link} href=''>Portfolio</a>
        </div>
        <div className={styles.box_three}>
          <a className={styles.box_three__link} href=''>Działalność</a>
        </div>
      </div>
    </div>
  );
};

export default SectionBoxes;
