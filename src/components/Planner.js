import React from "react";

function Planner({ plannedWorkouts, setPlannedWorkouts }) {
  const handleRemoveWorkout = (id) => {
    // Make a DELETE request to remove workout from JSON server
    fetch(`http://localhost:3001/plannedWorkouts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Update state after successful deletion
          setPlannedWorkouts(plannedWorkouts.filter((workout) => workout.id !== id));
        } else {
          console.error("Failed to delete workout");
        }
      })
      .catch((error) => console.error("Error deleting workout:", error));
  };

  return (
    <div className="planner">
      <h2>Planned Workouts</h2>
      {plannedWorkouts.length === 0 ? (
        <p>No planned workouts yet.</p>
      ) : (
        <ul>
          {plannedWorkouts.map((workout) => (
            <li key={workout.id} style={{ marginBottom: "10px" }}>
              <strong>{workout.name}</strong>
              <button
                style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
                onClick={() => handleRemoveWorkout(workout.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Planner;
