
import { Routes, Route } from "react-router";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Particle from "./components/Particle/Particle";
import Explore from "./components/Explore/Explore";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import Share from "./components/Share/Share";
import Edit from "./components/Edit/Edit";
import Logout from "./components/Logout/Logout";
import MyPuzzles from "./components/MyPuzzles/MyPuzzles";
import EditProfile from "./components/EditProfile/EditProfile";

import UserProvider from "./providers/UserProvider";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";

function App() {
  return (
    <UserProvider>
      <Navigation />
      <Particle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore/:puzzleId/details" element={<Details />} />

        <Route element={<GuestGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AuthGuard />}>
          <Route path="/share" element={<Share />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/my-puzzles" element={<MyPuzzles />} />
          <Route path="/explore/:puzzleId/edit" element={<Edit />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App
