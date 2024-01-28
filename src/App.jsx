import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Shop from "./pages/Shop";
import LearnHook from "./components/Hook/learnHook";
import AnimeDetails from "./pages/AnimePage";

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
          <Route path="/animedetails" element={<AnimeDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
