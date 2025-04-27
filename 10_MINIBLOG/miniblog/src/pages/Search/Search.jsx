// Css
import styles from "../Search/Search.module.css";

// React
import { Link } from "react-router-dom";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// Components
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();

  {
    /**
     * Pega o parâmetro "q" que é a base da consulta.
     * Esse parâmetro foi passado no componente Home.jsx
     * no momento do redirecionamento para a página de pesquisa.
     */
  }
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca ...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
