// Css
import styles from "./About.module.css";

// React Router
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no frontend e Firebase no backend.</p>
      <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  );
};

export default About;
