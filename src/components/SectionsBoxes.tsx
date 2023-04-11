import styles from './SectionBoxes.module.css';

const SectionBoxes: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.boxes_header}>Poznajmy się lepiej</h2>
        <span className={styles.header_underline}></span>
      <div className={styles.boxes_container}>
        <div className={styles.box_one}>
          <h3 className={styles.box_one__header}>O mnie</h3>
        </div>
        <div className={styles.box_two}>
          <h3 className={styles.box_two__header}>Portfolio</h3>
        </div>
        <div className={styles.box_three}>
          <h3 className={styles.box_three__header}>Działalność</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionBoxes;
