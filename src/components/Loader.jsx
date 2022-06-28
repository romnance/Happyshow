import pingPongLoader from "./pingPongLoader.gif";

const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      <img className="w-50 mt-4" src={pingPongLoader} alt="Loading..." />
    </div>
  );
};

export default Loader;
