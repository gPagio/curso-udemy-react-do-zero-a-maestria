const TemplateExpressions = () => {
  const name = "Guilherme";
  const data = {
    age: calcularDiferencaAnos("2004-01-27"),
    job: "Developer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como {data.job}.</p>
      <p>Você tem {data.age} anos.</p>
      <p>Você sabia que 4 + 4 = {4 + 4}?</p>
      <p>{console.log("Teste")}</p>
      {console.log("Teste")}
    </div>
  );
};

export default TemplateExpressions;

function calcularDiferencaAnos(dataString) {
  const dataAtual = new Date();
  const dataReferencia = new Date(dataString);

  if (isNaN(dataReferencia)) {
    throw new Error("Data inválida. Use o formato YYYY-MM-DD.");
  }

  const diffMs = dataAtual - dataReferencia;

  return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
}
