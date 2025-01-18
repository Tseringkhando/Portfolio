import styles from "./FooterStyles.module.css";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; Tsering Khando {year} <br />
      </p>
    </section>
  );
}

export default Footer;
