import React, {useEffect, useState} from "react";
import { data } from "react-router-dom";

function Planner() {
  const [schedule, setSchedule] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetch("http://localhost:3001/schedule")
      .then((response) => response.json())
      .then((data) => setSchedule(data))
      .catch((error) => console.error("Error fetching schedule:", error));

    fetch("http://localhost:3001/workouts")
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  //Find workout details by ID
  const getWorkoutDetails = (workoutId) => {
    return workouts.find((workout) => workout.id === workoutId) || {};
  };

  //Delete a scheduled workout
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/schedule/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setSchedule(schedule.filter((item) => item.id !== id));
    })
    .catch((error) => console.error("Error deleting schedule:", error));
  };

  return (
    <div className="planner">
      <h2>Workout Planner</h2>
      <div className="current-time">
        <p>Current Date: {currentTime.toLocaleDateString()}</p>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      </div>
      <div className="schedule-list">
        {schedule.map((item) => {
          const workout = getWorkoutDetails(item.workoutId);
          return (
            <div key={item.id} className="schedule-card">
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <p>Date: {item.date}</p>
              <p>Time: {item.time}</p>
              <button onClick={() => handleDelete(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Planner;
