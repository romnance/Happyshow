import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const ShowPage = () => {
  const [singleShow, setSingleShow] = useState();
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState();
  let { id } = useParams();
  const breakpoint = 600;

  const getSingleShow = async (id) => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    setLoading(false);
    console.log(data);
    setSingleShow(data);
  };

  useEffect(() => {
    if (id) getSingleShow(id);
  }, [id]);

  useEffect(() => {
    function updateSize() {
      setWidth([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (loading && !singleShow) return <Loader />;

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
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
            <p className={width > breakpoint ? "card-text w-50 m-4 mt-0" : "mt-3"}>
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowPage;
