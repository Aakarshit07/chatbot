import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Feedback from "./Feedback";
import { getResponse } from "../utils/api";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessage = { text: userInput, from: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Get AI response and add to the chat
      const aiResponse = getResponse(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponse, from: "ai" },
      ]);

      setUserInput("");
    }
  };

  // Save chat history to local storage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      const chatHistory = JSON.parse(localStorage.getItem("chatHistory") || "[]");
      chatHistory.push({ messages });
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [messages]);

  return (
    <div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <TextField
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        label="Ask me anything"
        variant="outlined"
        fullWidth
      />
      <Button onClick={handleSendMessage}>Send</Button>
      {messages.length % 2 === 0 && <Feedback />}
    </div>
  );
};

export default Chat;
