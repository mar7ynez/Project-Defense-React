
import { Routes, Route } from "react-router";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Particle from "./components/Particle/Particle";
import Explore from "./components/Explore/Explore";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <Navigation />
      <Particle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App
