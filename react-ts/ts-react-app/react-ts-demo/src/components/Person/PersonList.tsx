import React from "react";
interface PersonListProps {
  names: { first: string; last: string }[];
}

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((person) => {
        <li key={person.first}>
          {" "}
          {person.first} {person.last}
        </li>;
      })}
    </>
  );
};

export default PersonList;
