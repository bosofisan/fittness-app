import React from "react";

function Planner({ plannedWorkouts, setPlannedWorkouts }) {
  const handleRemoveWorkout = (id) => {
    const updatedWorkouts = plannedWorkouts.filter((workout) => workout.id !== id);
    setPlannedWorkouts(updatedWorkouts);
  };

  return (
    <div>
      <h2>Planned Workouts</h2>
      {plannedWorkouts.length === 0 ? (
        <p>No planned workouts yet.</p>
      ) : (
        <ul>
          {plannedWorkouts.map((workout) => (
            <li key={workout.id}>
              {workout.name}
              <button onClick={() => handleRemoveWorkout(workout.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Planner;
