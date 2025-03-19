import "./MyForm.css";

const MyForm = () => {
  return (
    <div>
      <form>
        {/* 1 - CRIACAO DE FORM*/}
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>

        {/* 2 - LABEL ENVOLVENDO INPUT*/}
        <label>
          <span>Email: </span>
          <input type="email" name="email" placeholder="Digite o seu email" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
