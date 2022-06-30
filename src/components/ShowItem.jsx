import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import controlShows from "../helpers/controlShows";

const ShowItem = ({ item, cb }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(controlShows.checkShow(item.id));
  }, []);

  const handleShow = () => {
    if (!fav) {
      controlShows.addShow(item);
    } else controlShows.removeShow(item.id);
    setFav(controlShows.checkShow(item.id));
    if (cb) cb();
  };


  return (
    <div
      className="card"
      style={{
        boxSizing: "borderBox",
        maxWidth: "calc(210px + 2rem)",
        marginBottom: "4%",
        marginRight: "2%",
      }}
    >
      <div className="card-body">
        <Link to={`/showpage/${item.id}`}>
          <img
            className="rounded mx-auto d-block"
            src={item.image?.medium ? item.image.medium : ""}
            alt={item.name}
          />
        </Link>
        <div className="d-flex flex-row justify-content-between w-100">
          <Link
            to={`/showpage/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="card-title mt-1">{item.name}</h5>
          </Link>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              margin: "0",
              padding: "0",
            }}
            type="button"
            onClick={() => {
              handleShow();
            }}
          >
            {fav ? <HeartFill /> : <Heart />}
          </button>
        </div>
        <h6 className="card-subtitle">{item.rating.average || "No rating"}</h6>
      </div>
    </div>
  );
};

export default ShowItem;
