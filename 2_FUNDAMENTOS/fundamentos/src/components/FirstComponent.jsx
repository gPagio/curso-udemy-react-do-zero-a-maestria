import MyComponent from "./MyComponent";

const FirstComponent = () => {
  return (
    //Teste comentario
    /*Teste comentario*/
    <div>
      {/*Teste comentários*/}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
