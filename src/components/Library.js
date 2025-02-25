import React, { useState, useEffect } from "react";

function WorkoutCard({workout}) {
  return(
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <img src={workout.image} alt={workout.name} style={{width: "200px"}} />
      <p>{workout.description}</p>
      <p>Type: {workout.type}</p>
      <p>Duration: {workout.duration}</p>
    </div>
  );
}
function Library() {
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState ("")

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library">
      <h2>Workout Library</h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <div className="workout-list">
        {filteredWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout}/>
        ))}
      </div>
    </div>
  );
}

export default Library;
