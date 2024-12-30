import React, { useEffect, useState } from "react";
import { FaMessage } from "react-icons/fa6";

export default function ChatbotEmbed() {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotId = `JCM6NK4m2AsJj-v-vGKqL`;

  useEffect(() => {
    // Load Chatbase script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!chatbotId) {
    return <p>Chatbot ID not found</p>;
  }

  if (!showChatbot) {
    return (
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaMessage size={24} color="#000000" />
      </button>
    );
  }

  return (
    <section
      style={{
        position: "fixed",
        right: "64px",
        bottom: "64px",
        width: "384px",
        height: "500px",
      }}
    >
      <iframe
        src={`https://www.chatbase.co/chatbot-iframe/${chatbotId}`}
        style={{
          borderRadius: "8px",
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="bhushan"
      >
        {" "}
      </iframe>
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1D4ED8",
          color: "#FFFFFF",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          border: "none",
          cursor: "pointer",
          zIndex: "100",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <FaMessage size={24} />
      </button>
    </section>
  );
}
