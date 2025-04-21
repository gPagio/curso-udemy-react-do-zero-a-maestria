// Css
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Mini Blog &copy; {year}</p>
    </footer>
  );
};

export default Footer;
