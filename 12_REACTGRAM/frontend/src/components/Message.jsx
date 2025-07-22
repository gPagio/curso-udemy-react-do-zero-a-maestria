import "./Message.css";

const Message = ({ type, message }) => {
  return (
    <div className={`message ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
