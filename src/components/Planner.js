import React, { useEffect, useState } from "react";

function Planner() {
  const [workouts, setWorkouts] = useState([]);
  const [plannedWorkouts, setPlannedWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Fetch workouts from db.json
  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((response) => response.json())
      .then((workoutData) => setWorkouts(workoutData))
      .catch((error) => console.error("Error fetching workouts:", error));

    // Fetch planned workouts
    fetch("http://localhost:3001/plannedWorkouts")
      .then((response) => response.json())
      .then((plans) => setPlannedWorkouts(plans))
      .catch((error) => console.error("Error fetching planned workouts:", error));
  }, []);

  // Handle submitting a new planned workout
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure a workout is selected
    const workout = workouts.find((w) => w.id === Number(selectedWorkout));
    if (!workout) {
      alert("Workout not found!");
      return;
    }

    const newPlan = {
      id: crypto.randomUUID(), // Unique ID for planned workouts
      workoutId: workout.id,
      workoutName: workout.name,
      date,
      time,
    };

    fetch("http://localhost:3001/plannedWorkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlan),
    })
      .then((res) => res.json())
      .then((addedPlan) => {
        setPlannedWorkouts([...plannedWorkouts, addedPlan]);
        setSelectedWorkout("");
        setDate("");
        setTime("");
      })
      .catch((error) => console.error("Error adding workout:", error));
  };

  // Handle deleting a planned workout
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this workout?")) return;

    fetch(`http://localhost:3001/plannedWorkouts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setPlannedWorkouts(plannedWorkouts.filter((plan) => plan.id !== id));
        } else {
          console.error("Failed to delete workout");
        }
      })
      .catch((error) => console.error("Error deleting workout:", error));
  };

  return (
    <div className="planner">
      <h2>Workout Planner</h2>

      {/* Workout Planning Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="workout">Workout: </label>
          <select id="workout" value={selectedWorkout} onChange={(e) => setSelectedWorkout(e.target.value)}>
            <option value="">Select a workout</option>
            {workouts.map((workout) => (
              <option key={workout.id} value={workout.id}>{workout.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="time">Time: </label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>

        <button type="submit">Plan Workout</button>
      </form>

      {/* Planned Workouts List */}
      <h3>Scheduled Workouts</h3>
      <ul>
        {plannedWorkouts.map((plan) => (
          <li key={plan.id}>
            {plan.workoutName} - {plan.date} at {plan.time}
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planner;
