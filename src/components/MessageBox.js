import { auth } from '../config';
import '../styles/MessageBox.css';
function MessageBox({ message, mention }) {
  return (
    <div className={`message-box ${mention ? 'mention' : ''} ${message.author === auth.currentUser.uid ? "self" : "other"}`}>
      <div className={`message`} key={message.id}>
        <p className='userName'>{message.sender}</p>
        <p className='msg'>{message.text}</p>
        {message.medias && message.medias.length > 0 && (
          <div className="media-container">
            {message.medias.map((media, index) => (
              <img key={index} src={media} alt={`Media ${index}`} className="media" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageBox;