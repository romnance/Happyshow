import React, { useState, useEffect } from "react";
import axios from "axios";
import { CalendarFill } from "react-bootstrap-icons";

function UpcomingShows() {
  const [nextEpisode, setNextEpisode] = useState();
  const [nextEpisodes, setNextEpisodes] = useState([]);

  const getNextEpisode = async (item) => {
    if (item.status === "Running") {
      const link = item?._links.nextepisode?.href;
      const nextepisode = await axios.get(link);
      nextepisode.data.showName = item.name;
      setNextEpisode(nextepisode.data);
    }
    return false;
  };

  function getShows() {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      items.map((item) => getNextEpisode(item));
    }
  }

  useEffect(() => {
    getShows();
  }, []);

  useEffect(() => {
    const episodes = nextEpisodes;
    if (nextEpisode) episodes.push(nextEpisode);
    let uniq = [...new Set(episodes)];
    uniq = uniq
      .sort(function (a, b) {
        console.log(new Date(b.airstamp) - new Date(a.airstamp));
        return new Date(b.airstamp) - new Date(a.airstamp);
      })
      .reverse();
    setNextEpisodes(uniq);
  }, [nextEpisode]);

  console.log(nextEpisodes[0]);

  return (
    <div className="">
      <h1 className="mb-3">Upcoming shows</h1>
      <ul className="">
        {nextEpisodes.map((item) => (
          <li>
            <h5>{item.showName}</h5>
            <h5 className="text-success">Episode: {item.name}</h5>
            <p className="card-text">
              <CalendarFill /> {item.airtime} {item.airdate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingShows;
