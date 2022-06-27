import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shows from "./pages/Home";
import MyShows from "./pages/MyShows";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import BreadCrumb from "./components/BreadCrumb";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <BreadCrumb />
      <Layout>
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/myshows" element={<MyShows />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
