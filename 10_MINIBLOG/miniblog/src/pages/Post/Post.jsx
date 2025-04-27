// Css
import styles from "./Post.module.css";

// React
import { Link } from "react-router-dom";

// Hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div>
      {loading && <p>Carregando post...</p>}
      {!post && (
        <div className={styles.nopost}>
          <p>Post não encontrado</p>
          <Link to="/" className="btn btn-dark">
            Voltar
          </Link>
        </div>
      )}
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
    </div>
  );
};

export default Post;
