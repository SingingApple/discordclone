import React from "react";

import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}

export default App;
