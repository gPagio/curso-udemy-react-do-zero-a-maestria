import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const urlBase = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - RESGATANDO DADOS DA API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(urlBase);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  // 2 - ADICIONANDO NOVOS PRODUTOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    const res = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 -  CARREGAMENTO DINAMICO4
    setProducts([...products, await res.json()]);

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>Nome: 
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>Preço: 
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
