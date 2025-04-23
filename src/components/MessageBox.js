import '../styles/MessageBox.css';
function MessageBox({ message, mention }) {
  return (
    <div className={`message-box ${mention ? 'mention' : ''}`}>
      {message}
    </div>
  );
}

export default MessageBox;