import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Form, FormControl, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import ShowItem from "../components/ShowItem";

function Home() {
  const [shows, setShows] = useState();
  const Styles = styled.div`
    .d-flex {
      width: fit-content;
      margin-right: auto;
    }
    .form-control {
      margin-right: 0.15em;
    }
  `;

  const searchShows = async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    console.log(data);
    setShows(data);
  };

  const defaultShows = async () => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows`);
    console.log("nosearch", data);
    return setShows(data);
  };

  useEffect(() => {
    defaultShows();
  }, []);

  return (
    <Styles>
      <Form className="d-flex">
        <FormControl type="search" placeholder="Search" aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form>

      {shows ? (
        <div className="">
          {shows.map((item) => (
            <ShowItem
              key={item.id || item.show.id}
              id={item.id || item.show.id}
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
      ) : (
        <Loader />
      )}
    </Styles>
  );
}

export default Home;
