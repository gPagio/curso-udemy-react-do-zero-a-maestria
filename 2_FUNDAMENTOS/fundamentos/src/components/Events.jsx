const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento disparado!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui também!
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso nâo deveria existir =)");
            }
          }}
        >
          Clica aqui por favor!
        </button>
      </div>
      <div>
        <button onClick={console.clear}>Limpar console</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
