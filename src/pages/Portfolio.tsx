import ContactSection from '../components/ContactSection';
import styles from './Portfolio.module.css';
import { imageList } from '../imageList';

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio' className={styles.portfolio_section}>
      <div className={styles.portfolio_wrapper}>
        <div className={styles.intro_container}>
          <h2 className={styles.intro_heading}>Portfolio</h2>
          <div className={styles.intro_description}>
            <p className={styles.intro_text}>
              Oprócz tematów wnętrzarskich, od zawsze interesował ją marketing w
              social mediach. Swoją wiedzę zgłębiła w praktyce prowadząc z
              powodzeniem konta w social mediach dwóch sklepów internetowych. Na
              swoim kanale dzieli się też często tipami dotyczącymi prowadzenia
              profilu na Instagramie, a swoją wiedzę spisała w{' '}
              <span className={styles.intro_span}>
                e-booku pt. „Jak rozwinąć konto wnętrzarskie . 10 kroków do
                sukcesu”.{' '}
              </span>
              <p className={styles.intro_text}>
                O tym, czym dla niej jest Instagram, jak zbudować zaangażowaną
                społeczność i jak działa algorytm opowiedziała psycholog
                Ewelinie Wojciechowskiej w wywiadzie live:{' '}
                <a
                  className={styles.intro_link}
                  href='https://www.instagram.com/tv/CUK_nPNDWEk/?igshid=YmMyMTA2M2Y%3D'
                >
                  {' '}
                  Link do rozmowy
                </a>
              </p>
            </p>
            <p className={styles.intro_text}>
              Wyznacznikiem współpracy jest zawsze dla niej jakość, dlatego też
              podejmuje się reklamowania produktów, pod którymi podpisuje się
              obiema rękami. W realizację projektów z markami zawsze wkłada całe
              serce i zaangażowanie, aby reklama była ciekawa.
            </p>
            <span className={styles.intro_span}>
              Oto kilka przykładowych publikacji:
            </span>
          </div>
        </div>
        <div className={styles.portfolio_lists__container}>
          <ul className={styles.portfolio_lists}>
            {imageList.map((item) => (
              <li key={item.id} className={styles.portfolio_item}>
                <a className={styles.portfolio_links} href={item.link}>
                  <div className={styles.portfolio_description}>
                    <h3 className={styles.portfolio_title}>{item.title}</h3>
                    <p className={styles.portfolio_text}>{item.text}</p>
                    <img
                      className={styles.portfolio_image}
                      src={item.image}
                      alt='interior-photo'
                    ></img>
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
