import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";

function Library({ workouts, plannedWorkouts, setPlannedWorkouts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToPlanner = (workout) => {
    // Check if the workout is already in the planner to avoid duplicates
    if (plannedWorkouts.some((w) => w.id === workout.id)) {
      alert("Workout is already in the planner!");
      return;
    }

    // Send a POST request to add workout to plannedWorkouts
    fetch("http://localhost:3001/plannedWorkouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    })
      .then((res) => res.json())
      .then((newWorkout) => {
        setPlannedWorkouts([...plannedWorkouts, newWorkout]);
      })
      .catch((error) => console.error("Error adding workout:", error));
  };

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library">
      <h2>Workout Library</h2>
      <input
        type="text"
        placeholder="Search workouts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="workout-list">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id}>
            <WorkoutCard workout={workout} />
            <button onClick={() => handleAddToPlanner(workout)}>Add to Planner</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
