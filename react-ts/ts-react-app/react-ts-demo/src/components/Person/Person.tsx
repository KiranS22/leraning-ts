import React from "react";
interface PersonProps {
  personName: {
    first: string;
    last: string;
  };
}
const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        {props.personName.first} 

        {props.personName.last}
      </p>
    </div>
  );
};

export default Person;
