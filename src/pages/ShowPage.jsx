import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { Heart, HeartFill } from "react-bootstrap-icons";
import controlShows from "../helpers/controlShows";
import { CalendarFill } from "react-bootstrap-icons";

const ShowPage = () => {
      const [error, setError] = useState(null);
      const [fav, setFav] = useState(false);
      const [singleShow, setSingleShow] = useState();
      const [nextEpisode, setNextEpisode] = useState();
      const [loading, setLoading] = useState(true);
      const [width, setWidth] = useState();
      let { id } = useParams();
      const breakpoint = 600;

      const getSingleShow = async (id) => {
        try {
          const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
          setLoading(false);
          setSingleShow(data);
          setFav(controlShows.checkShow(id));
        } catch (err) {
          setLoading(false);
          setError(err);
        }
      };

      useEffect(() => {
        if (id) getSingleShow(id);
      }, [id]);

      const getNextEpisode = async (item) => {
        if (!item.status) return null;
        try {
          if (item.status === "Running") {
            const link = item?._links.nextepisode?.href;
            const nextepisode = await axios.get(link);
            nextepisode.data.showName = item.name;
            setNextEpisode(nextepisode.data);
          }
        } catch (err) {
          setError(err);
        }
      };

      useEffect(() => {
        if (singleShow) getNextEpisode(singleShow);
      }, [singleShow]);

      useEffect(() => {
        function updateSize() {
          setWidth([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
      }, []);

      if (loading && !singleShow) return <Loader />;

      const getErrorView = () => {
        return <div>Oh no! Something went wrong. {error.message}</div>;
      };

      const removeTags = (text) => {
        if (text === null || text === "") {
          return false;
        } else {
          text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
      };

      const handleShow = () => {
        if (!fav) {
          controlShows.addShow(singleShow);
        } else controlShows.removeShow(id);
        setFav(controlShows.checkShow(id));
      };

      return (
        <>
          {!singleShow && error ? getErrorView() : null}
          {singleShow && (
            <div className="container m-1">
              <h1 className="mb-3">{singleShow.name}</h1>
              <div className={width > breakpoint ? "d-flex flex-row" : "col"}>
                <div className="card" style={{ maxWidth: "fit-content" }}>
                  <img
                    src={
                      singleShow.image
                        ? singleShow.image.medium
                        : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                    }
                    alt={singleShow.name}
                    className="card-img-top"
                    style={{ maxWidth: "380px" }}
                  />
                  <div className="card-body">
                    <div className="d-flex flex-row justify-content-between w-100 mb-2">
                      <h6
                        className="w-100"
                        style={{ alignSelf: "flex-end", marginBottom: "0.2rem" }}
                      >
                        {fav ? "Remove from Shows" : "Add to Shows"}
                      </h6>
                      <button
                        type="button"
                        onClick={() => {
                          handleShow();
                        }}
                        style={{
                          boxSizing: "border-box",
                          border: "none",
                          backgroundColor: "white",
                          height: "fit-content",
                        }}
                      >
                        {fav ? <HeartFill /> : <Heart />}
                      </button>
                    </div>
                    {singleShow.genres &&
                      singleShow.genres.map((genre) => (
                        <>
                          {" "}
                          <span key={genre} className="badge bg-secondary">
                            {genre}
                          </span>{" "}
                        </>
                      ))}
                    <p className="card-text mb-1 mt-3">
                      <strong>Status:</strong> {singleShow.status && singleShow.status}
                    </p>
                    <p className="card-text  mb-1">
                      <strong>Rating:</strong>{" "}
                      {singleShow.rating ? singleShow.rating.average : "No rating"}
                    </p>
                    <p className="card-text  mb-1">
                      <strong>Offical Site:</strong>{" "}
                      {singleShow.officalSite ? (
                        <a href={singleShow.officalSite} target="_blank" rel="noreferrer">
                          {singleShow.officalSite}
                        </a>
                      ) : (
                        "No offical site"
                      )}
                    </p>
                  </div>
                </div>
                <p className={width > breakpoint ? "w-50 m-4 mt-0" : "mt-3"}>
                  {singleShow.summary && removeTags(singleShow.summary)}
                </p>
                {singleShow && !nextEpisode && error ? getErrorView() : null}
                {nextEpisode && (
                  <div className="d-flex flex-column">
                    <h5>Next episode</h5>
                    <h5 className="text-success">{nextEpisode.name}</h5>
                    <div className="d-flex flex-row w-100 mb-2">
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
                        {nextEpisode.airtime} {nextEpisode.airdate}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      );
};

export default ShowPage;
