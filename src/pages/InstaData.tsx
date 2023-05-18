import styles from './InstaData.module.css';
import ContactSection from '../components/ContactSection';
import { screenList } from '../screenList';

const InstaStats: React.FC = () => {
  const screenItems = screenList.map(item => {
    return (
      <div className={styles.screen_block} key={item.id}>
        <h3 className={styles.screen_title}>{item.title}</h3>
        <img className={styles.screen_image} src={item.image as string} alt='instagram-screenshot' />
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
        <p>
          Zapraszam do zapoznania się ze statystykami na moim Instagramie(ponad
          115 tys. obserwujących) Znajdziesz tutaj kilka ciekawych informacji
          dotyczący zasięgów zdjęć i rolek. Dowiesz się również, jakie posty
          przyciągają największą uwagę i jakie treści generują najwięcej
          zaangażowania, a także jakie grupy odbiorców najchętniej odwiedzają
          moje konto.
        </p>
        <p>
          Jeśli jesteś zainteresowany/a reklamą lub współpracą na moich kanałach
          SM, daj znać poprzez <a href='#contacts'>Kontakt</a>
        </p>
        <div className={styles.screens_container}>
          {screenItems}
        </div>
      </div>
      <ContactSection />
    </section>
  );
};

export default InstaStats;
