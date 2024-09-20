import React from "react";
import { Route } from "react-router-dom";
import homepage from "./pages/homepage.js";
import ChatPage from "./pages/chatpage.js";
// exact is used for no interconnection of chatpage and homepage there location are different
function App() {
  return (
    <div className="App">
      <Route path="/" component = {homepage} exact/>
      <Route path="/chats" component = {ChatPage} />
      </div>
  );
}

export default App;
