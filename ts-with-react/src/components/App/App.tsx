import React, { useEffect, useState } from "react";
import "./../../resources/App/App.css";
import PostList from "../PostList/PostList";

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchDataAndSetData();
  }, []);

  return (
    <div className="App">
      <PostList data={data} />
    </div>
  );
};

export default App;
