import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="ee34cd47-d60b-447f-b52e-7dfb4b843538"
        userName="emmanuel"
        userSecret="admin"
        renderChatFeed={(charAppProps) => <ChatFeed {...charAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3")
        }
      ></ChatEngine>
    </div>
  );
}

export default App;
