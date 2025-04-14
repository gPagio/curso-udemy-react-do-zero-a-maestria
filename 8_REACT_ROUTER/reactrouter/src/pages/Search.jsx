import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Disponíveis</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul className="products">
        {!error &&
          !loading &&
          items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        {!error && !loading && items && items.length === 0 && (
          <p>Não foram encontrados resultados para a sua busca.</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
