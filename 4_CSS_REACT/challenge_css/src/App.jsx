import "./App.css";

import Car from "./components/Car";

function App() {
  const cars = [
    { id: 1, marca: "Ford", modelo: "Ka", ano: 2010, km: 100000 },
    { id: 2, marca: "Chevrolet", modelo: "Corsa", ano: 2005, km: 150000 },
    { id: 3, marca: "Fiat", modelo: "Uno", ano: 2012, km: 80000 },
    { id: 4, marca: "Volkswagen", modelo: "Gol", ano: 2015, km: 50000 },
    { id: 5, marca: "Renault", modelo: "Clio", ano: 2007, km: 120000 },
  ];

  return (
    <div>
      <h1 className="titulo_principal">Carros</h1>
      {cars.map((car) => (
        <Car
          key={car.id}
          id={car.id}
          marca={car.marca}
          modelo={car.modelo}
          ano={car.ano}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;
