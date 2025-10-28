import {useEffect,useRef } from 'react'
import  ChatMessage  from '../components/ChatMessage.jsx'
import './ChatMessages.css'


function ChatMessages({chatMessages}) {
      const chatMessagesRef =  useRef(null);
        useEffect(() => {
          chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }, [chatMessages]);
       
        return (
          <div className = "chat-messages-container"
          ref = {chatMessagesRef}>
          

          {chatMessages.map((chat, index) => (

                <ChatMessage
                  key={index}
                  message={chat.message}
                  sender={chat.sender}
                />
        ))}
          
          </div>
          );
}


export default ChatMessages 