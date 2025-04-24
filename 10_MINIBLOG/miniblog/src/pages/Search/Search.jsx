// Css
import styles from "../Search/Search.module.css";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

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

  return (
    <div>
      <h2>Search</h2>
      <p>{search}</p>
    </div>
  );
};

export default Search;
