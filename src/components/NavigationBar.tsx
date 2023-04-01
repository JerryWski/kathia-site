import styles from './NavigationBar.module.css'

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.nav_bar}>
      <div>
        <a href=''>
          <img
            className={styles.nav_bar__logo}
            src={require('../images/logo-one.png')}
            alt='logo'
          />
        </a>
      </div>
      <ul className={styles.nav_bar__lists}>
        <li>
          <a href=''>O mnie</a>
        </li>
        <li>
          <a href=''>Portfolio</a>
        </li>
        <li>
          <a href=''>Działalność</a>
        </li>
        <li>
          <a href=''>Kontakt</a>
        </li>
      </ul>
      <ul className={styles.nav_bar__lists}>
        <li>+ 531 767 911</li>
      </ul>
      <ul className={styles.nav_bar__lists}>
        <li>
          <a href=''>insta ikonka</a>
        </li>
        <li>
          <a href=''>email ikonka</a>
        </li>
      </ul>

      {/* <button class='hamburger hamburger--collapse' type='button'>
          <span class='hamburger-box'>
            <span class='hamburger-inner'></span>
          </span>
        </button> */}
    </nav>

  /* <div class='hero-container'>
        <div class='wrapper one'>
          <h1 class='wrapper__header'>
            <span class='wrapper__header wrapper__header-beauty'>Beauty</span>
            <span class='wrapper__header wrapper__header-logic'>Logic</span>
          </h1>
          <h2 class='wrapper__subheader'>Agata Pulchny - Ambroziak</h2>
          <p class='wrapper__text'>
            Odkryj piękno swojej natury z Beauty Logic. Nasz zespół specjalistów
            dąży do tego, aby pomóc Ci poczuć się jak najlepiej. Zaufaj Beauty
            Logic i pozwól nam wyjąć to, co najlepsze w Tobie.
          </p>
          <a class='button-link' href='#offers'>
            <span class='wrapper__button'>Sprawdź Ofertę</span>
          </a>
        </div>
        <div class='wrapper two'>
          <img
            class='wrapper__image'
            src='./src/img/hero-img.png'
            alt='woman'
          />
        </div>
      </div> */
  )
}

export default NavigationBar
