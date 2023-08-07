import React from "react";

import "./../../resources/App.css";
import Greet from "../Greet/Greet";

function App() {
  return (
    <div className="App">
      <Greet name={"Kiran"} messageCount={15} isLoggedIn={false} />
    </div>
  );
}

export default App;
