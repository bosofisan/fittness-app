import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Library from "../pages/Library";
import Planner from "../pages/Planner";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Fitness Planner</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
