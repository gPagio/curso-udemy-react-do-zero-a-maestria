const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h3>Detalhes do usuário</h3>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? <p>{name} pode dirigir!</p> : <p>{name} não pode dirigir!</p>}
    </div>
  );
};

export default UserDetails;
