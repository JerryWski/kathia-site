import ContactSection from '../components/ContactSection';
import styles from './Portfolio.module.css';
import { imageList } from '../imageList';

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio' className={styles.portfolio_section}>
      <div className={styles.portfolio_wrapper}>
        <div className={styles.intro_container}>
          <h2 className={styles.intro_heading}>Portfolio</h2>
          <p className={styles.intro_description}>
            dsadsadsdasdasdadasdadasdasd
          </p>
        </div>
        <div className={styles.portfolio_lists__container}>
          <ul className={styles.portfolio_lists}>
            {imageList.map((item) => (
              <li key={item.id} className={styles.portfolio_item}>
                <a href=''>
                  <div className={styles.portfolio_description}>
                    <h3 className={styles.portfolio_title}>{item.title}</h3>
                    <p className={styles.portfolio_text}>Something about</p>
                    <img src={item.image}></img>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ContactSection />
    </section>
  );
};

export default Portfolio;
