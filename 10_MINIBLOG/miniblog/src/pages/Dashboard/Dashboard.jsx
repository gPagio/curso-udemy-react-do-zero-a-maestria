// Css
import styles from "./Dashboard.module.css";

// React
import { Link } from "react-router-dom";

// Hooks
import { useAuthContextValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const posts = [];

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencia os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <Link to="/posts/create" className="btn">Criar Primeiro Post</Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
