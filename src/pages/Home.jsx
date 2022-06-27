import React from "react";
import styled from "styled-components";
import { Form, FormControl, Button } from "react-bootstrap";

function Home() {
  const Styles = styled.div`
    .d-flex {
      width: fit-content;
      margin-right: auto;
    }
    .form-control {
      margin-right: 0.15em;
    }
  `;

  return (
    <Styles>
      <Form className="d-flex">
        <FormControl type="search" placeholder="Search" aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Styles>
  );
}

export default Home;
