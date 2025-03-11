import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";

function Library({ workouts }) {
  const [searchTerm, setSearchTerm] = useState("");

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
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default Library;
