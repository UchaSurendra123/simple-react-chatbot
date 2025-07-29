function ChatInput(){
  return (
    <>
      <input placeholder="Send a message to Chatbot" size="30" />
      <button>Send</button>
    </>
  );
}

function ChatMessage({message, sender}) {
  return (
    <div>
      {sender === 'robot' && <img src="images/robot.png" width="50"/>}
      {message}
      {sender === 'user' && <img src="images/user.png" width="50"/>}
    </div>
  );
}

const App = (
  <>
    <ChatInput />
    <ChatMessage message="hello Chatbot" sender="user" />
    <ChatMessage message="Hello! How can I help you?" sender="robot" />
    <ChatMessage message="can you get me todays date ?" sender="user" />
    <ChatMessage message="Today is July 16" sender="robot" />
  </>
);

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(App);
