import { useState } from 'react';
import './ChatInput.css';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const saveInput = (event) => {
    setInputText(event.target.value);
  };

  const sendMessage = async () => {
    if (!inputText.trim() || isSending) return;

    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: 'user' },
    ];

    setChatMessages(newChatMessages);
    setInputText('');
    setIsSending(true);

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newChatMessages }),
      });

      if (!res.ok) throw new Error('Server error');

      const data = await res.json();

      setChatMessages([
        ...newChatMessages,
        { message: data.reply, sender: 'robot' },
      ]);
    } catch (err) {
      console.error(err);
      setChatMessages([
        ...newChatMessages,
        { message: '⚠️ Error: could not reach server.', sender: 'robot' },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        type="text"
        placeholder="Send a message to ChatBot"
        value={inputText}
        onChange={saveInput}
        onKeyDown={handleKeyDown}
        disabled={isSending}
      />
      <button
        className="send-button"
        onClick={sendMessage}
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
}

export default ChatInput;
