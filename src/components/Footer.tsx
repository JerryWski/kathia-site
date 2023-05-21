import CookiesContener from './CookiesContener';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <>
    <div className={styles.footer}>
    <span className={styles.footer_overline}></span>
      <p className={styles.footer_text}>created by Jerry_Wski</p>
      <p className={styles.footer_year}>© Copyright {currentYear()}</p>
    </div>
    <CookiesContener />
    </>
  );
};

export default Footer;
