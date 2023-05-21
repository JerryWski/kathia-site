import styles from './CookiesContener.module.css';

const CookiesContener: React.FC = () => {
  return <div className={styles.cookies_container}>
    <div style={styles.cookies_wrapper}>
        <div style={styles.cookies}>
            <h3 style={styles.cookies_heading}>Nagłówek cookies</h3>
            <p style={styles.cookies_text}>Teskt o cookies</p>
        </div>
        <button role='button' style={styles.cookies_button}>Ackceptuję</button>
    </div>
    </div>;
};

export default CookiesContener;
