import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      <p className={styles.footer_text}>created by Jerry_Wski</p>
      <p className={styles.footer_year}>© Copyright {currentYear()}</p>
    </div>
  );
};

export default Footer;
