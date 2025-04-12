import "./App.css";

import { useState, useEffect } from "react";

// 4 - CUSTOM HOOKS
import { useFetch } from "./hooks/useFetch";

function App() {
  const urlBase = "http://localhost:3000/products";

  const { data: items, httpConfig, loading, error } = useFetch(urlBase);

  //const [products, setProducts] = useState(items);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - RESGATANDO DADOS DA API
  /*  useEffect(() => {
    async function fetchData() {
      const res = await fetch(urlBase);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);*/

  // 2 - ADICIONANDO NOVOS PRODUTOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    /*const res = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 -  CARREGAMENTO DINAMICO4
    setProducts([...products, await res.json()]);*/

    // 5 - REFAZENDO O POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*6 - LOADING*/}
      {loading && <p>Carregando dados ...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price} <button onClick={() => handleDelete(product.id)}>Excluir</button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - STATE DE LOADING NO POST */}
          {loading && <input type="submit" disabled value="Aguarde ..." />}
          {!loading && !error && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
