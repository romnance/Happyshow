import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ShowItem from "../components/ShowItem";
import { Form, FormControl, Button } from "react-bootstrap";

function Home() {
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState();
  const [defaultShows, setDefaultShows] = useState();

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchShows = async (searchTerm) => {
    try {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
      );
      if (data) {
        setShows(data);
        setSearchTerm("");
      }
    } catch (err) {
      setError(err);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setDefaultShows();
      searchShows(searchTerm);
    }
  };

  const getDefaultShows = async () => {
    try {
      const { data } = await axios.get(`https://api.tvmaze.com/shows?page=1`);
      setDefaultShows(data.slice(0, 60));
    } catch (err) {
      setError(err);
    }
  };

  const getErrorView = () => {
    return <div>Oh no! Something went wrong. {error.message}</div>;
  };

  useEffect(() => {
    getDefaultShows();
  }, []);

  if (!shows && !defaultShows && !error) return <Loader />;

  return (
    <>
      {error && getErrorView()}
      <Form
        onSubmit={handleOnSubmit}
        style={{ maxWidth: "340px" }}
        className="d-flex flex-row"
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 mt-2"
          value={searchTerm}
          onChange={handleOnChange}
        />
        <Button variant="outline-secondary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
      {defaultShows && !shows ? (
        <div className="d-flex flex-wrap w-100 mt-3">
          {defaultShows?.map((item) => (
            <ShowItem item={item} key={item.id} />
          ))}
        </div>
      ) : null}
      {shows && !defaultShows ? (
        <div className="d-flex flex-wrap w-100 mt-3">
          {shows.map((item) => (
            <ShowItem item={item.show} key={item.show.id} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Home;
