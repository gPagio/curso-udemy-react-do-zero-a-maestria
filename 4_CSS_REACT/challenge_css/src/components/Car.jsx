import styles from './Car.module.css';

const Car = ({ id, marca, modelo, ano, km }) => {
  return (
    <div>
      <h2 className={styles.titulo_principal}>{id} - {marca} {modelo}</h2>
      <p className={styles.texto}>Ano: {ano}</p>
      <p className={styles.texto}>KM: {km}</p>
    </div>
  );
};

export default Car;
