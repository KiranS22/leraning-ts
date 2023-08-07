import React from "react";

import "./../../resources/App.css";
import Greet from "../Greet/Greet";
import Person from "../Person/Person";

function App() {
const personName ={
  first: "Bruce ",
  last: "Wayne"
}
  return (
    <div className="App">
      <Greet name={"Kiran"} messageCount={15} isLoggedIn={false} />
      <Person personName={personName}/>
    </div>
  );
}

export default App;
