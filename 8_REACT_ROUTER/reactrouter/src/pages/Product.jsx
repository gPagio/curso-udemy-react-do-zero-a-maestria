import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";

const Product = () => {
  // useParams retorna um objeto com os parâmetros da URL.
  // Podemos desfragmentar pegando cada propriedade
  // individualmente com uso de chaves {}
  const { id } = useParams();

  // Carregando o produto específico
  const url = "http://localhost:3000/products/" + id;
  const { data: item, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {item && (
        <div className="product-details">
          <h2>
            {id} - {item.name}
          </h2>
          <p>R$ {item.price}</p>

          {/* Nested Routes */}
          <Link to={`/products/${item.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
