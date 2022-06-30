import React, { useState, useEffect } from "react";
import axios from "axios";
import { CalendarFill } from "react-bootstrap-icons";

function UpcomingShows({ items }) {
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
    if (items) {
      items.map((item) => getNextEpisode(item));
    }
  }

  useEffect(() => {
    if (items) {
      setNextEpisodes([]);
      getShows();
    }
  }, [items]);

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

  return (
    <div>
      {items.length > 0 && <h1 className="mb-3">Upcoming shows</h1>}
      {items.length > 0 && nextEpisodes.length < 1 ? (
        <div class="alert alert-info" role="alert">
          Your favorite shows don't have new episodes coming up
        </div>
      ) : null}
      <ul className="list-group">
        {nextEpisodes.map((item) => (
          <li className="list-group-item pt-4">
            <h5>{item.showName}</h5>
            <h5 className="text-success">Episode: {item.name}</h5>
            <div className="d-flex flex-row w-100">
              <i
                style={{
                  boxSizing: "border-box",
                  border: "none",
                  backgroundColor: "white",
                  height: "fit-content",
                }}
              >
                <CalendarFill />
              </i>
              <p
                style={{
                  alignSelf: "flex-start",
                  marginTop: "0.1em",
                  marginLeft: "0.3em",
                }}
              >
                {item.airtime} {item.airdate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingShows;
