import ReactMarkdown from "react-markdown";
import robotProfileImage from '../assets/robot.png'
import userProfileImage from '../assets/user.png'
import './ChatMessage.css'

function ChatMessage({ message, sender }) { 
  if (sender === "robot") {
    return (
      <div className="chat-message-robot">
        <img
          src={robotProfileImage}
          className="chat-message-profile"
          alt="chat bot image"
        />
        <div className="chat-message-text">
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chat-message-user">
        <div className="chat-message-text">
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
        <img
          src={userProfileImage}
          className="chat-message-profile"
          alt="user image"
        />
      </div>
    );
  }
}

export default ChatMessage;
