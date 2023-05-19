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
        <img className={styles.screen_image} src={item.image} alt='instagram-screenshot' />
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
          src={require('../images/stowidokow_home.png')}
          alt='logo'
        />
        <div className={styles.description_container}>
          <p className={styles.description}>
            Zapraszam do zapoznania się ze statystykami na moim Instagramie(ponad
            115 tys. obserwujących).
          </p>
          <p className={styles.description}>Znajdziesz tutaj kilka ciekawych informacji
            dotyczący zasięgów zdjęć i rolek. Dowiesz się również, jakie posty
            przyciągają największą uwagę i jakie treści generują najwięcej
            zaangażowania, a także jakie grupy odbiorców najchętniej odwiedzają
            moje konto.</p>
          <p className={styles.description}>
            Jeśli jesteś zainteresowany/a reklamą lub współpracą na moich kanałach
            SM, daj znać poprzez <a className={styles.description_span} href='#contacts'>Kontakt</a>
          </p>
        </div>
        <div className={styles.screens_container}>
          {screenItems}
        </div>
      </div>
      <ContactSection />
    </section>
  );
};

export default InstaStats;
