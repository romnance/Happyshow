import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "../components/Loader";
import ShowItem from "../components/ShowItem";
import { Form, FormControl } from "react-bootstrap";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState();
  const [defaultShows, setDefaultShows] = useState();
  const Styles = styled.div`
    .d-flex {
      width: fit-content;
      margin-right: auto;
    }
    .searchbar {
      margin-right: 0.15em;
      padding-left: 0.2em;
    }
  `;

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
      setDefaultShows("");
      searchShows(searchTerm);
      setSearchTerm("");
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
    <Styles>
      <Form onSubmit={handleOnSubmit}>
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
            <ShowItem
              key={item.id}
              id={item.id}
              image={
                item.image
                  ? item.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.name}
              rating={item.rating.average ? item.rating.average : "No rating"}
            />
          ))}
        </div>
      ) : null}
      {shows && !defaultShows ? (
        <div className="d-flex flex-wrap w-100 justify-content-between mt-3">
          {shows.map((item) => (
            <ShowItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={item.show.rating.average ? item.show.rating.average : "No rating"}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </Styles>
  );
}

export default Home;
