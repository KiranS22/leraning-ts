import React from "react";

const Status = () => {
  return (
    <div>
      <h2>Loading...</h2>
      <h2>Data Fetched</h2>
      <h2>Eerror when fetching data </h2>
    </div>
  );
};

export default Status;
/*
The goal here is to conditionaly render one of these h22's or status' based on a passed in prop
*/
