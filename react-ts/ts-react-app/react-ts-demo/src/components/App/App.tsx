import React from "react";

import "./../../resources/App.css";
import Greet from "../Greet/Greet";
import Person from "../Person/Person";
import PersonList from "../Person/PersonList";

function App() {
const personName ={
  first: "Bruce ",
  last: "Wayne"
}

const peopleList = [
  {
    first: "John",
    last: "Doe"
  },
  {
    first: "Jane",
    last: "Smith"
  },
  {
    first: "Michael",
    last: "Johnson"
  }
];


  return (
    <div className="App">
      <Greet name={"Kiran"} messageCount={15} isLoggedIn={false} />
      <Person personName={personName}/>
      <PersonList names={peopleList} />


    </div>
  );
}

export default App;
