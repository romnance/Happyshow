import { Link } from "react-router-dom";
import styled from "styled-components";
import { Heart, HeartFill } from "react-bootstrap-icons";

const ShowItem = ({ image, name, rating, id }) => {
  const Styles = styled.div`
    a {
      color: black;
      display: inline-block;
      text-decoration: none;
      font-weight: 600;
      &:hover {
        color: palevioletred;
      }
    }
    .card {
      box-sizing: border-box;
      max-width: calc(210px + 2rem);
      flex: 0 30%;
      height: fit-content;
      margin-bottom: 4%;
    }
    button {
      border: none;
      background-color: white;
      margin: 0;
      padding: 0;
      &:hover {
        color: palevioletred;
      }
    }
  `;
  return (
    <Styles>
      <div className="card">
        <div className="card-body">
          <Link to={`/pageshow/${id}`}>
            <img src={image} alt={name} />
          </Link>
          <div className="d-flex flex-row justify-content-between w-100">
            <Link to={`/pageshow/${id}`}>
              <h5 className="card-title mt-1">{name}</h5>
            </Link>
            <button type="button">
              <Heart />
            </button>
          </div>
          <h6 className="card-subtitle">{rating}</h6>
        </div>
      </div>
    </Styles>
  );
};

export default ShowItem;
