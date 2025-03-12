import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Library from "./Library";
import Planner from "./Planner";
import NavBar from "./NavBar";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [plannedWorkouts, setPlannedWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));

    fetch("http://localhost:3001/plannedWorkouts")
      .then((res) => res.json())
      .then((data) => setPlannedWorkouts(data))
      .catch((error) => console.error("Error fetching planned workouts:", error));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/library" 
          element={<Library workouts={workouts} plannedWorkouts={plannedWorkouts} setPlannedWorkouts={setPlannedWorkouts} />} 
        />
        <Route 
          path="/planner" 
          element={<Planner plannedWorkouts={plannedWorkouts} setPlannedWorkouts={setPlannedWorkouts} />} 
        />
      </Routes>
    </>
  );
}

export default App;
