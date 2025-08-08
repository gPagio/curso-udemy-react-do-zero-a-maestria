import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
