const TemplateExpressions = () => {
  const name = "Guilherme";
  const data = {
    age: 21,
    job: "Developer"
  }

  return (
    <div>
      <h1>Olá {name},tudo bem?</h1>
      <p>Você atua como {data.job}.</p>
      <p>Você tem {data.age} anos.</p>
      <p>Você sabia que 4 + 4 = {4 + 4}?</p>
      <p>{console.log("Teste")}</p>
      {console.log("Teste")}
    </div>
  );
};

export default TemplateExpressions;