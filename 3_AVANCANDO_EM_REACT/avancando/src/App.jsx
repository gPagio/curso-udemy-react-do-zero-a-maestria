import "./App.css";

import Mendoza from "./assets/mendoza.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

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

      <ManageData></ManageData>
      <ListRender></ListRender>
    </div>
  );
}

export default App;
