const CarDetails = ({brand, km, color, isNew}) => {
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        {isNew && <p>Este carro é novo!</p>}
      </ul>
    </div>
  );
};

export default CarDetails;
