import React from "react";

interface GreetProps {
  name: string;
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> Welcome,{props.name} you have 10 unread messages</h2>
    </div>
  );
};

export default Greet;



