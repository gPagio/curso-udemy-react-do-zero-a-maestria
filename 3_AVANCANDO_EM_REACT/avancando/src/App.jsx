import "./App.css";

import Mendoza from "./assets/mendoza.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import { useState } from "react";

function App() {
  const name = "Guilherme";
  const [userName] = useState("Luana");

  const cars = [
    { id: 1, brand: "VW", km: 100000, color: "Azul", isNew: false },
    { id: 2, brand: "Fiat", km: 50000, color: "Branco", isNew: false },
    { id: 3, brand: "Ford", km: 0, color: "Vermelho", isNew: true },
    { id: 4, brand: "Chevrolet", km: 20000, color: "Preto", isNew: false },
    { id: 5, brand: "Renault", km: 80000, color: "Prata", isNew: false },
    { id: 6, brand: "Peugeot", km: 30000, color: "Cinza", isNew: false },
    { id: 7, brand: "Hyundai", km: 15000, color: "Verde", isNew: true },
    { id: 8, brand: "Toyota", km: 5000, color: "Amarelo", isNew: true },
    { id: 9, brand: "Honda", km: 70000, color: "Rosa", isNew: false },
    { id: 10, brand: "BMW", km: 40000, color: "Laranja", isNew: false },
  ];

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
      <CondicionalRender></CondicionalRender>
      {/* props */}
      <ShowUserName name={userName}></ShowUserName>
      {/* destructuring props */}
      <CarDetails
        brand="VW"
        km={100000}
        color="Azul"
        isNew={false}
      ></CarDetails>
      {/* reaproveitando */}
      <CarDetails
        brand="Fiat"
        km={50000}
        color="Branco"
        isNew={false}
      ></CarDetails>
      <CarDetails
        brand="Ford"
        km={0}
        color="Vermelho"
        isNew={true}
      ></CarDetails>
      {/* loop com array */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          isNew={car.isNew}
        ></CarDetails>
      ))}
      {/* fragments */}
      <Fragments propFragment="Teste"></Fragments>
    </div>
  );
}

export default App;
