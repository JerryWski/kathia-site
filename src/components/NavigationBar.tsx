import styles from './NavigationBar.module.css'

const NavigationBar: React.FC = () => {
  return (
    <>
      <nav className={styles.nav_bar}>
        <div className={styles.logo_container}>
          <a href='#home'>
            <img
              className={styles.logo_container__image}
              src={require('../images/logo-two.png')}
              alt='logo'
            />
          </a>
        </div>
        <ul className={styles.nav_bar__list}>
          <li className={styles.nav_bar__list_item}>
            <a href=''>O mnie</a>
          </li>
          <li className={styles.nav_bar__list_item}>
            <a href=''>Portfolio</a>
          </li>
          <li className={styles.nav_bar__list_item}>
            <a href=''>Działalność</a>
          </li>
          <li className={styles.nav_bar__list_item}>
            <a href=''>Kontakt</a>
          </li>
        </ul>
        <ul className={styles.nav_bar__social}>
          <li className={styles.nav_bar__social_item}>
            <a className={styles.icons} href=''>
              I
            </a>
          </li>
          <li className={styles.nav_bar__social_item}>
            <a className={styles.icons} href=''>
              E
            </a>
          </li>
          <li className={styles.nav_bar__social_item}>
            <a className={styles.icons} href=''>
              T
            </a>
          </li>
        </ul>

        {/* <button class='hamburger hamburger--collapse' type='button'>
        <span class='hamburger-box'>
          <span class='hamburger-inner'></span>
        </span>
      </button> */}
      </nav>

      {/* <div class='hero-container'>
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
                      alt='woman' />
              </div>
          </div> */}
    </>
  )
}

export default NavigationBar
