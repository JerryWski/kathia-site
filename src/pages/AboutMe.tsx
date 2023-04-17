import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <div>
      <div className={styles.about_wrapper}>
        <div className={styles.intro_container}>
          <p className={styles.intro_text}>
            &apos; Poznajmy się! dlatego teraz trochę... &apos;
          </p>
          <h2 className={styles.intro_heading}>o Mnie</h2>
        </div>
        <div className={styles.image_container}>
          <img
            className={styles.profile_image}
            src={require('../images/woman-test.jpg')}
            alt='woman'
          ></img>
        </div>
      </div>
      <p className={styles.intro_descritpion}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus
        praesentium molestias officiis accusantium aliquid quo perferendis ex.
        Quidem fuga, voluptas maiores nesciunt cupiditate est vitae quaerat
        deserunt dignissimos eveniet!
      </p>
    </div>
  );
};

export default AboutMe;
