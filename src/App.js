import { Routes, Route } from "react-router-dom";
import Shows from "./pages/Home";
import MyShows from "./pages/MyShows";
import ShowPage from "./pages/ShowPage";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/myshows" element={<MyShows />} />
          <Route path="/showpage/:id" element={<ShowPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
