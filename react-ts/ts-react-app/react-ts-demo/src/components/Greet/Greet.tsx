import React from "react";

interface GreetProps {
  name: string;
  messageCount: number;
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {

  return (
  <>
    {
props.isLoggedIn?

<div>
  <h2> Welcome,{props.name} you have {props.messageCount} unread messages</h2>
</div>:"welcome Guest"

}
  </>
  )
};

export default Greet;
