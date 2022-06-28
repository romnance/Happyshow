import { Link } from "react-router-dom";

const ShowItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="card">
      <div className="card-body">
        <img src={image} alt={name} />
        <h4 className="card-title">{name}</h4>
        <h4 className="card-subtitle">{rating}</h4>
      </div>
    </Link>
  );
};

export default ShowItem;
