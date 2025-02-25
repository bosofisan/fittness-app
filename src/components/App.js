import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Library from "./Library";
import Planner from "./Planner";

function App() {
    return (
        <div className="App">
            <h1>Fitness Planner</h1>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/planner" element={<Planner />} />
            </Routes>
        </div>
    );
}

export default App;
