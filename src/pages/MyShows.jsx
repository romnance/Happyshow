import React, { useState, useEffect } from "react";

function MyShows() {
  const [items, setItems] = useState([]);

  // localStorage.setItem("items", JSON.stringify(items));

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div className="container m-1">
      <h1>My shows</h1>
    </div>
  );
}

export default MyShows;
