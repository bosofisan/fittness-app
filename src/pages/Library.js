import React, { useState, useEffect } from "react";

function Library() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  return (
    <div className="library">
      <h2>Workout Library</h2>
      <div className="workout-list">
        {workouts.map((workout) => (
          <div key={workout.id} className="workout-card">
            <h3>{workout.name}</h3>
            <img src={workout.image} alt={workout.name} style={{ width: "200px" }} />
            <p>{workout.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
