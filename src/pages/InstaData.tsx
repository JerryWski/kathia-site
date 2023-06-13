import styles from './InstaData.module.css';
import ContactSection from '../components/ContactSection';
import { screenList } from '../screenList';

interface Item {
  id: number
  image: string
  title: string
}

const InstaStats: React.FC = () => {
  const screenItems: JSX.Element[] = screenList.map((item: Item) => {
    return (
      <div className={styles.screen_block} key={item.id}>
        <h3 className={styles.screen_title}>{item.title}</h3>
        <img
          className={styles.screen_image}
          src={item.image}
          alt='instagram-screenshot'
        />
      </div>
    );
  });
  return (
    <section id='insta-stats' className={styles.data_section}>
      <div className={styles.intro_container}>
        <h2 className={styles.intro_heading}>Statystyki z Instagrama</h2>
      </div>
      <div className={styles.data_wrapper}>
        <img
          className={styles.logo}
          src={require('../images/stowidokow_home2.png')}
          alt='logo'
        />
        <p className={styles.brand_text}>Marka Osobista</p>
        <div className={styles.description_container}>
          <p className={styles.description}>
            Zapraszam do zapoznania się z przykładowymi statystykami na moim Instagramie
            <span className={styles.description_span__first}>
              {' '}
              (ponad 117 tys. obserwujących).
            </span>
          </p>
          <p className={styles.description}>
            Znajdziesz tutaj kilka ciekawych informacji dotyczący zasięgów zdjęć
            i rolek. Dowiesz się również, do ilu odbiorców docierają treści
            umieszczane na moim Instagramie i w jakie dni występuję największa
            aktywności, a także jakie grupy odbiorców najchętniej odwiedzają
            moje konto.
          </p>
          <p className={styles.description}>
            Jeśli jesteś zainteresowany/a reklamą lub współpracą na moich
            kanałach SM, daj znać poprzez{' '}
            <span className={styles.description_span}><a href='mailto:stowidokow.home@gmail.com'>email</a></span>.
          </p>
        </div>
        <div className={styles.screens_container}>{screenItems}</div>
      </div>
      <ContactSection />
    </section>
  );
};

export default InstaStats;
