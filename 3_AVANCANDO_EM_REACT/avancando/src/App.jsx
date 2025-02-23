import "./App.css";

import Mendoza from "./assets/mendoza.jpg";

function App() {
  return (
    <div>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/maldivas.jpg" alt="Maldivas" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={Mendoza} alt="Mendoza" />
      </div>
    </div>
  );
}

export default App;
