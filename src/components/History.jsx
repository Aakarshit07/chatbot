const History = () => {
  const chatHistory = JSON.parse(localStorage.getItem("chatHistory") || "[]");

  return (
    <div>
      <h2>Chat History</h2>
      {chatHistory.length > 0 ? (
        chatHistory.map((chat, index) => (
          <div key={index}>
            <h3>Chat {index + 1}</h3>
            <div>
              {chat.messages.map((message, i) => (
                <div key={i} className={message.from}>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No chat history available.</p>
      )}
    </div>
  );
};

export default History;
