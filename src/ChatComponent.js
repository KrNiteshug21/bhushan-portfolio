import React, { useState } from 'react';
import qaData from "./content/personal.json"; // Adjust the path as necessary
import './ChatComponent.css'; // Import the CSS file

const ChatComponent = () => {
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  console.log(qaData);

  const startChat = () => {
    setIsChatActive(true);
    setMessages([]); // Clear previous messages if needed
  };

  const endChat = () => {
    setIsChatActive(false);
  };

  const handleSendMessage = (message) => {
    if (message) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);

      // Find the answer from the JSON data
      const foundQA = qaData.chats.find(
        (qa) => qa.question.toLowerCase() === message.toLowerCase()
      );

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: foundQA ? foundQA.answer : "I'm sorry, I don't understand that.",
            sender: 'bot',
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      {isChatActive ? (
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === 'user' ? 'chat-message-user' : 'chat-message-bot'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(userInput);
                  setUserInput('');
                }
              }}
            />
          </div>
          <button className="chat-button chat-button-end" onClick={endChat}>
            End Chat
          </button>
        </div>
      ) : (
        <div className="chat-start">
          <button className="chat-button chat-button-start" onClick={startChat}>
            Start Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
