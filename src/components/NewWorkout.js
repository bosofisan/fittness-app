import React, { useState } from "react";

function NewWorkoutForm({ setWorkouts }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    type: "",
    duration: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newWorkout) => {
        setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
        setFormData({ name: "", image: "", description: "", type: "", duration: "" });
      })
      .catch((error) => console.error("Error adding workout:", error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Workout Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input type="text" name="type" placeholder="Workout Type" value={formData.type} onChange={handleChange} />
      <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default NewWorkoutForm;
