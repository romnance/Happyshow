import React, { useState, useEffect } from "react";
import ShowItem from "../components/ShowItem";

function MyShows() {
  const [items, setItems] = useState([]);

  function getShows() {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }

  useEffect(() => {
    getShows();
  }, []);

  return (
    <div className="container m-1">
      <h1>My shows</h1>
      <div className="d-flex flex-wrap w-100 justify-content-between mt-3">
        {items.map((item) => (
          <ShowItem key={item.id} item={item} cb={getShows} />
        ))}
      </div>
    </div>
  );
}

export default MyShows;
