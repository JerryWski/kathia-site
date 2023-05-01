import ContactSection from '../components/ContactSection';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  return (
    <div id='portfolio' className={styles.portfolio_section}>
      <div className={styles.portfolio_wrapper}>
        <div className={styles.intro_container}>
          <h2 className={styles.intro_heading}>Portfolio</h2>
        </div>

      </div>
      <ContactSection />
    </div>
  );
};

export default Portfolio;
