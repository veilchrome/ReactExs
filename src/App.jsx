import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Shop from "./pages/Shop";
import LearnHook from "./components/Hook/learnHook";
import Homepage from "./pages/HomePage";
import AnimeItem from "./pages/AnimeItem";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/hook" element={<LearnHook />} />
          <Route path="/animehomepage" element={<Homepage />} />
          <Route path="/anime/:id" element={<AnimeItem />} />
          <Route path="/character/:id" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
