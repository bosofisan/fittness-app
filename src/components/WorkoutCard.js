import React from "react";

function WorkoutCard({ workout }) {
  return (
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <img src={workout.image} alt={workout.name} style={{ width: "200px" }} />
      <p>{workout.description}</p>
      <p>Type: {workout.type}</p>
      {workout.duration && <p>Duration: {workout.duration}</p>}
    </div>
  );
}

export default WorkoutCard;
