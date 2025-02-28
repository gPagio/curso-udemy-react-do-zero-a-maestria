const ChangeMessageState = ({ handleMessage }) => {
  const messages = [
    "Mensagem 1",
    "Mensagem 2",
    "Mensagem 3",
    "Mensagem 4",
    "Mensagem 5",
  ];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Mensagem 1</button>
      <button onClick={() => handleMessage(messages[1])}>Mensagem 2</button>
      <button onClick={() => handleMessage(messages[2])}>Mensagem 3</button>
      <button onClick={() => handleMessage(messages[3])}>Mensagem 4</button>
      <button onClick={() => handleMessage(messages[4])}>Mensagem 5</button>
    </div>
  );
};

export default ChangeMessageState;
