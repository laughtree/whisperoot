import '../styles/MessageBox.css';
function MessageBox({ message, mention }) {
  return (
    <div className={`message-box ${mention ? 'mention' : ''}`}>
      <div className="message" key={message.id}>
        <p>{message.sender}: {message.text}</p>
      </div>
    </div>
  );
}

export default MessageBox;