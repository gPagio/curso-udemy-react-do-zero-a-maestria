import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Guilherme", "João", "Maria", "Ana"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Guilherme", age: 21 },
    { id: 2, name: "João", age: 25 },
    { id: 3, name: "Maria", age: 30 },
    { id: 4, name: "Ana", age: 35 },
  ]);

  const deleteRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setUsers(users.filter((user) => user.id !== randomIndex));
  }

  return (
    <div>
      <h2>Lista de nomes</h2>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h2>Lista de usuários</h2>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} anos
            </li>
          ))}
        </ul>
      </div>

      <h2>Delete random user</h2>
      <div>
        <button onClick={deleteRandomUser}>
          Delete random user
        </button>
      </div>
    </div>
  );
};

export default ListRender;
