import React, { useState, useEffect } from "react";
import ShowItem from "../components/ShowItem";
import UpcomingShows from "../components/UpcomingShows";

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
      {items.length < 1 ? (
        <div class="alert alert-info mt-3" role="alert" style={{ width: "fit-content" }}>
          You dont have any favourite show yet
        </div>
      ) : null}
      <div className="d-flex flex-wrap w-100 mt-3">
        {items?.map((item) => (
          <ShowItem key={item.id} item={item} cb={getShows} />
        ))}
      </div>
      {items && <UpcomingShows items={items} />}
    </div>
  );
}

export default MyShows;
