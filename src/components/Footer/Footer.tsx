import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <p>© 2024 Omoz</p>
      <p>wow so accessible</p>
      <div className={styles.nav}>
        <a href="/">▲</a>
      </div>
    </div>
  );
}

export default Footer;
