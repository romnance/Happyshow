import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ShowItem from "../components/ShowItem";
import { Form, FormControl } from "react-bootstrap";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState();
  const [defaultShows, setDefaultShows] = useState();

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchShows = async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    setShows(data);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setDefaultShows();
      searchShows(searchTerm);
    }
  };

  const getDefaultShows = async () => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows?page=1`);
    setDefaultShows(data.slice(0, 50));
  };

  useEffect(() => {
    getDefaultShows();
  }, []);

  return (
    <>
      <Form onSubmit={handleOnSubmit} style={{ maxWidth: "340px" }}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 mt-2"
          value={searchTerm}
          onChange={handleOnChange}
        />
      </Form>
      {defaultShows && !shows ? (
        <div className="d-flex flex-wrap w-100 justify-content-between mt-3">
          {defaultShows?.map((item) => (
            <ShowItem item={item} key={item.id} />
          ))}
        </div>
      ) : null}
      {shows && !defaultShows ? (
        <div className="d-flex flex-wrap w-100 justify-content-between mt-3">
          {shows.map((item) => (
            <ShowItem item={item.show} key={item.show.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
