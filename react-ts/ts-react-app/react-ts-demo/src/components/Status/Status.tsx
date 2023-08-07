import React from "react";

interface StatusProps {
  status: "loading" | "OK" | "Error";
}
const Status = (props: StatusProps) => {
  let message;
  if (props.status == "loading") {
    message == "Loading";
  } else if (props.status == "OK") {
    message == "Data Fetched";
  } else if (props.status == "Error") {
    message == "Error fetching data";
  }
  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;
/*
The goal here is to conditionaly render one of these h22's or status' based on a passed in prop. The problem with this  code is that status accepts any string, meaning user can pass any string
*/
