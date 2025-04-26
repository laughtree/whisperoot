import { auth } from '../config';
import '../styles/MessageBox.css';
function MessageBox({ message, mention }) {
  return (
    <div className={`message-box ${mention ? 'mention' : ''} ${message.author === auth.currentUser.uid ? "self" : "other"}`}>
      <div className={`message`} key={message.id}>
        <p className='userName'>{message.sender}</p>
        <p className='msg'>{message.text}</p>
      </div>
    </div>
  );
}

export default MessageBox;