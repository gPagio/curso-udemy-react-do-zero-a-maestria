const Challenge = () => {
  const value1 = 1;
  const value2 = 2;

  function sum(a, b) {
    return a + b;
  }

  return (
    <div>
      <h1>Primeiro valor: {value1}</h1>
      <h1>Segundo valor: {value2}</h1>
      {console.log(sum(value1, value2))}
    </div>
  );
};

export default Challenge;
